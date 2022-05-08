const file = require('fs');
const task = require('../json/db.json');

const saveTask = () => {
    file.writeFile("./json/db.json", JSON.stringify(task), (err) => {
        if (err)
            throw err;
        console.log("Data has been modified");
    });
}

const getTask = async (req, res) => {
    const listTask = await task;
    res.status(200).json(listTask);
}

const deleteTask = async (req, res) => {
    task.forEach((item, index) => {
        if (item.id == req.params.id) {
            deletedTask = task.splice(index, 1);
        }
        saveTask();
    })
    res.status(200).json(deletedTask);
}

const addTask = async (req, res) => {
    const time = new Date();
    newTask = req.body
    newTask.id = time.getTime() + Math.floor(Math.random() * 100);
    task.push(newTask);
    saveTask();
    res.status(200).json(req.body);
}

module.exports = { getTask, deleteTask, addTask };

