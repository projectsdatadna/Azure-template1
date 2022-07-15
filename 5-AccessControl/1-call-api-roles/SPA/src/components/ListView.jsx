import React, { useState, useRef, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { nanoid } from 'nanoid';
import ListGroup from 'react-bootstrap/ListGroup';

import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';

import { protectedResources } from '../authConfig';
import { deleteTask, postTask, editTask } from '../fetch';

import useTokenAcquisition from '../hooks/useTokenAcquisition';

function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}

export const ListView = (props) => {
    const { instance } = useMsal();
    const [tasks, setTasks] = useState(props.todoListData);
    const [tokenResponse, error] = useTokenAcquisition(protectedResources.apiTodoList.scopes.write, InteractionType.Popup);
    const account = instance.getActiveAccount();

    const handleCompleteTask = (id) => {
        const updatedTask = tasks.find((task) => id === task.id);
        updatedTask.completed = !updatedTask.completed;

        editTask(tokenResponse.accessToken, id, updatedTask).then((response) => {
            const updatedTasks = tasks.map((task) => {
                if (id === task.id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
            setTasks(updatedTasks);
        });
    };

    const handleAddTask = (name) => {
        const newTask = {
            owner: account.idTokenClaims?.oid,
            id: nanoid(),
            name: name,
            completed: false,
        };

        postTask(tokenResponse.accessToken, newTask).then((res) => {
            if (res && res.message === 'success') {
                setTasks([...tasks, newTask]);
            }
        });
    };

    const handleDeleteTask = (id) => {
        deleteTask(tokenResponse.accessToken, id).then((response) => {
            if (response && response.message === 'success') {
                const remainingTasks = tasks.filter((task) => id !== task.id);
                setTasks(remainingTasks);
            }
        });
    };

    const handleEditTask = (id, newName) => {
        const updatedTask = tasks.find((task) => id === task.id);
        updatedTask.name = newName;

        editTask(tokenResponse.accessToken, id, updatedTask).then(() => {
            const updatedTasks = tasks.map((task) => {
                if (id === task.id) {
                    return { ...task, name: newName };
                }
                return task;
            });
            setTasks(updatedTasks);
        });
    };

    const taskList = tasks.map((task) => (
        <TodoItem
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            completeTask={handleCompleteTask}
            deleteTask={handleDeleteTask}
            editTask={handleEditTask}
        />
    ));

    const listHeadingRef = useRef(null);
    const prevTaskLength = usePrevious(tasks.length);

    useEffect(() => {
        if (tasks.length - prevTaskLength === -1) {
            listHeadingRef.current.focus();
        }
    }, [tasks.length, prevTaskLength]);

    return (
        <div className="data-area-div">
            <TodoForm addTask={handleAddTask} />
            <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}></h2>
            <ListGroup className="todo-list">{taskList}</ListGroup>
        </div>
    );
};
