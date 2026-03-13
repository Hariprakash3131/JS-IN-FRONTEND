let usersId = 1
let tasksId = 1

function createUsersId(){
    return usersId++
}

function createTasksId(){
    return tasksId++
}

function createDate(){
    return new Date()
}

module.exports = {
    createUsersId,
    createTasksId,
    createDate
}