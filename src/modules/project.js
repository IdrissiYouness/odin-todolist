const createProject = (name) =>{
    let tasks = [];
    return {name,tasks};
};

const filterCompletedTaskList = (project) => {
    return project.tasks.filter(task => task.completed);
};

const deleteProject = (projectList, projectIndex) => {
    projectList.splice(projectIndex, 1);
};

export default {createProject,deleteProject,filterCompletedTaskList};
