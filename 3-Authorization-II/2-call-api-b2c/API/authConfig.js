const passportConfig = {
    credentials: {
        tenantName: 'karanorgdatadna.onmicrosoft.com',
        clientID: 'ea2568bd-84f8-4e8d-a4ec-cf565cad833b',
    },
    policies: {
        policyName: 'B2C_1_signupsignin1',
    },
    metadata: {
        b2cDomain: 'karanorgdatadna.b2clogin.com',
        authority: 'login.microsoftonline.com',
        discovery: '.well-known/openid-configuration',
        version: 'v2.0',
    },
    settings: {
        isB2C: true,
        validateIssuer: false,
        passReqToCallback: true,
        loggingLevel: 'info',
        loggingNoPII: false,
    },
    protectedRoutes: {
        todolist: {
            endpoint: '/api/todolist',
            delegatedPermissions: {
                read: ['ToDoList.Read', 'ToDoList.ReadWrite'],
                write: ['ToDoList.ReadWrite'],
            },
        },
    },
};

module.exports = passportConfig;

