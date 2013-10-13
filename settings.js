module.exports = {
    PORT: 8000,
    POST_MAX_SIZE: 40, //MB
    UPLOAD_MAX_FILE_SIZE: 40, //MB , less than or equal POST_MAX_SIZE
    DIR: {
        PROJECT: __dirname, // Project Directory
        INTERCEPTORS: 'interceptors',
        VIEWS: 'views', // Views Directory
        CONTROLLERS: 'controllers' // Controllers Directory
    },
    DEFAULT_THEME: "default",
    DB: {
        HOST: "localhost",
        USER: 'root',
        PASSWORD: '123',
        DATABASE: 'test'
    }
};