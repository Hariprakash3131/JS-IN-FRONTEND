// tasks.js

const { generateTaskId, getCurrentDate } = require("./utils");

let tasks = [];

function createTask(title, description, priority) {

    const task = {
        id: generateTaskId(),
        title,
        description,
        assignedUserId: null,
        status: "pending",
        priority,
        createdAt: getCurrentDate()
    };

    tasks.push(task);

    console.log("Task created:", title);

}

function updateTaskStatus(id, status) {

    const task = tasks.find(t => t.id === id);

    if (!task) {
        throw new Error("Task not found");
    }

    task.status = status;

    console.log("Task status updated:", status);

}

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    console.log("Task deleted:", id);

}

function listTasks() {

    console.log("----- Tasks -----");

    tasks.forEach(task => {
        console.log(task);
    });

}

function getTasks() {

    return tasks;

}

module.exports = {
    createTask,
    updateTaskStatus,
    deleteTask,
    listTasks,
    getTasks
};