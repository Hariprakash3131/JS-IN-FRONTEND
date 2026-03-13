const { addUsers, listUsers } = require("./users")
const { createTasks, updateTaskStatus, listTasks } = require("./task")
const { assignTask, taskStatistics } = require("./service")

async function main(){

    try{

        addUsers("Subash","subash123@email.com","developer")
        addUsers("prakash","praksh1234@email.com","designer")

        createTasks("Build Login API","Authentication system","high")
        createTasks("Design Dashboard","UI layout","medium")

        assignTask(1,1)
        assignTask(2,2)

        updateTaskStatus(1,"completed")

        listUsers()
        listTasks()

        taskStatistics()

    }
    catch(error){

        console.log("Error:", error.message)

    }

}

main()