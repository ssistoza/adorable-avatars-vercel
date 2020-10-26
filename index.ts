const avatarsMiddleware = require('adorable-avatars');
const app = require('express')();

app.use('/', avatarsMiddleware);

module.exports = app;