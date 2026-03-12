const {createTasksId,createDate}=require('./utils')

let tasks=[]

function createTasks(title,description,priority){
    const task={
        id:createTasksId(),
        title,
        description,
        status:"pending",
        priority,
        createdAt:createDate()
    }
    tasks.push(task)
    console.log('Task Created:',title)
}

function updateTaskStatus(id,status){
    const task=tasks.find((t)=>{
        t.id===id
    })

    if(!task){
        throw new error("Task Not Found")
    }

    task.status=status
    console.log("Tasks Status Updated:",status)
}

function listTasks(){
    console.log("Tasks")
    tasks.forEach(task=>{
        console.log(task)
    })
}

function getTask(){
    return tasks
}

module.exports={
    createTasks,
    updateTaskStatus,
    listTasks,
    getTask
}