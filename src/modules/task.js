const createTask = (title,description,dueDate,priority) => {
    return {title, description,dueDate,priority,completed:false};
};

const editTask = (task,newTitle,newDueDate,newPriority) =>{
    task.title = newTitle;
    task.dueDate = newDueDate;
    task.priority = newPriority;
    return task;
};

const deleteTask = (taskList,taskIndex) => {
    taskList.splice(taskIndex,1);
};


function getTaskPriority(priority){
    if(priority==='High') return 'high-priority';
    if(priority==='Medium') return 'medium-priority'
    return 'low-priority';
}

const toggleCompletedTask = (task) =>{
    task.completed = !task.completed;
}

const isOverDue = (dueDate) => {
    const today = new Date();
    return new Date(dueDate) < today;
}

export {createTask,editTask,deleteTask,getTaskPriority,toggleCompletedTask,isOverDue};