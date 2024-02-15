const passportConfig = {
    credentials: {
        tenantName: 'karanorgdatadna.onmicrosoft.com',
        clientID: '67ebfa90-9744-4f20-bdd8-801d46b7198f',
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

