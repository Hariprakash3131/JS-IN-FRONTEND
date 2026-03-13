const { getUsers } = require('./users')
const { getTask } = require('./task')

function assignTask(taskId,userId){

    const tasks = getTask()
    const users = getUsers()

    const task = tasks.find(t => t.id === taskId)
    const user = users.find(u => u.id === userId)

    if(!task){
        throw new Error("Task does not exist")
    }

    if(!user){
        throw new Error("User does not exist")
    }

    task.assignedUserId = userId

    console.log("Task assigned to", user.name)
}

function taskStatistics(){

    const tasks = getTask()
    const users = getUsers()

    let total = tasks.length

    let completed = tasks.filter(t => t.status === "completed").length
    let pending = tasks.filter(t => t.status === "pending").length

    console.log(" Task Statistics ")

    console.log("Total Tasks:", total)
    console.log("Completed Tasks:", completed)
    console.log("Pending Tasks:", pending)

    console.log("Tasks per User:")

    users.forEach(user => {

        let count = tasks.filter(t => t.assignedUserId === user.id).length

        console.log(user.name, "→", count)

    })

}

module.exports = {
    assignTask,
    taskStatistics
}