const avatarsMiddleware = require('adorable-avatars');
const app = require('express')();

app.use('/api', avatarsMiddleware)

module.exports = app;