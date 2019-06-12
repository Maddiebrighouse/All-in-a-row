const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const posts = require('./routes/posts');
// const category = require('./routes/category');
const auth = require('./routes/auth.js');

const server = express();

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../public')));

server.use('/api/v1/', auth);
server.use('/api/v1/', posts);
// server.use('/api/v1/', category);

module.exports = server