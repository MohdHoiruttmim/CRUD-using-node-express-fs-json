const express = require('express');
const route = express.Router();
const { getTask, deleteTask, addTask } = require('../controller/taskController.js');

route.get('/getTask', getTask);
route.delete('/delete/:id', deleteTask);
route.post('/add', addTask);

exports.route = route;