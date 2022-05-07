const express = require('express');
const route = express.Router();
const { getTask, deleteTask } = require('../controller/taskController.js');

route.get('/getTask', getTask);
route.delete('/delete/:id', deleteTask);

exports.route = route;