import project from "../modules/project";
import task from "../modules/task";

export function importDataFromStorage(storage){
  checkThatStorageExists();
  let projectCollection = JSON.parse(localStorage.getItem('projectCollection'));
  checkThatDefaultProjectExists(projectCollection);

  projectCollection.forEach(proj => {
    const newProject = project(proj.id, proj.name);

    if (proj.tasks !== undefined) {
      proj.tasks.forEach(myTask => {
        const newTask = task(myTask.id, myTask.title, myTask.description,myTask.priority, myTask.dueDate)
        if (myTask.completionStatus === 'true') newTask.setStatus('true');
        newProject.addATask(newTask);
      });
    }

    storage.addProject(newProject);
  });

  return projectCollection;
}

export function exportDataToStorage(storage){
  localStorage.setItem("projectCollection", storage.convertToJSON());
}

function checkThatStorageExists(){
  let projectCollection = JSON.parse(localStorage.getItem('projectCollection'));
  if (projectCollection === null) {
    localStorage.setItem('projectCollection', '[]');
  }
}

function checkThatDefaultProjectExists(projectCollection){
  const index = projectCollection.findIndex(item => {
    return item.id === 'default';
  });

  if (index !== -1) return;
  const defaultProject = {
    id: 'default',
    name: 'Default',
  };

  projectCollection.unshift(defaultProject);
}