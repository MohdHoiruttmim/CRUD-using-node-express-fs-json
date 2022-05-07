const file = require('fs');
const task = require('../json/db.json');

const saveTask = () => {
    file.writeFile("./json/db.json", JSON.stringify(task), (err) => {
        if (err)
            throw err;
        console.log("Data has been deleted");
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

module.exports = { getTask, deleteTask };

