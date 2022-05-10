const express = require('express');
const route = express.Router();
const { getTask, deleteTask, addTask, updateTask } = require('../controller/taskController.js');

route.get('/getTask', getTask);
route.delete('/delete/:id', deleteTask);
route.post('/add', addTask);
route.patch('/update/:id', updateTask);

exports.route = route;