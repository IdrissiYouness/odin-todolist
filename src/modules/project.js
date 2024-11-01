const createProject = (name) =>{
    let tasks = [];
    return {name,tasks};
};

const filterCompletedTaskList = (project) => {
    return project.tasks.filter(task => task.completed);
};

export default {createProject,filterCompletedTaskList};
