// app.js

const { addUser, listUsers } = require("./users");
const { createTask, updateTaskStatus, listTasks } = require("./task");
const { assignTask, taskStatistics } = require("./service");

async function main() {

    try {

        addUser("John", "john@email.com", "developer");
        addUser("Sarah", "sarah@email.com", "designer");

        createTask("Build Login API", "Authentication system", "high");
        createTask("Design Dashboard", "UI layout", "medium");

        assignTask(1, 1);
        assignTask(2, 2);

        updateTaskStatus(1, "completed");

        listUsers();
        listTasks();

        taskStatistics();

    } catch (error) {

        console.log("Error:", error.message);

    }

}

main();