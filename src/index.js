import './styles/style.css';
import createNav from './ui/nav';
import createMainContent ,{createTaskItem,addTaskToDom} from './ui/main-content.js';
import { createDiv } from './ui/dom-elements.js';
import { getActiveProjectId,createProjectTab,addProjectToNav,createDefaultProject } from "./ui/nav";
import { createProjectModal,createTaskModal} from "./ui/modals";
import { attachEventListeners } from './events/event-listeners';
import { importDataFromStorage,exportDataToStorage } from './utils/local-storage.js';
import task from './modules/task.js';
import project from './modules/project.js';
import  createProjectCollection from './modules/project-collection.js';

const {modal:projectModal,
     projectNameInput,
     confirmProjectButton } = createProjectModal();

const {modal:taskModal,
     titleTaskInput,
     descInput,
     priorityListSelect,
     dueDateInput,
     confirmTaskButton } = createTaskModal();

const pageContainer = createDiv('main-container');
const nav = createNav();
const main = createMainContent();

main.appendChild(taskModal);
main.appendChild(projectModal);

pageContainer.appendChild(nav);
pageContainer.appendChild(main);

document.body.appendChild(pageContainer);

document.addEventListener('DOMContentLoaded', () => {
     attachEventListeners();
 });


const myProjects = initializeStorage();

renderProjects(myProjects);

function initializeStorage() {
     const newProjectCollection = createProjectCollection();
     importDataFromStorage(newProjectCollection);
     return newProjectCollection;
}



 confirmProjectButton.addEventListener('click',()=>{
     const projectName = projectNameInput.value;
     const newId = Date.now().toString();

     const newProj = project(newId,projectName);
     myProjects.addProject(newProj);
     const newProjectTab = createProjectTab(newId,projectName);
     addProjectToNav(newProjectTab);
     newProjectTab.addEventListener
     exportDataToStorage(myProjects);
     return true;
});

confirmTaskButton.addEventListener('click',()=>{

     const newTaskId = Date.now().toString();

     const activeProjectId = getActiveProjectId();

     const activeProject = myProjects.findProjectIndex(activeProjectId);

     const newTask = task
     (
          newTaskId,
          titleTaskInput.value,
          descInput.value,
          priorityListSelect.value,
          dueDateInput.value
     );

     myProjects.getProject(activeProject).addATask(newTask);

     const taskItem = createTaskItem(
          newTaskId,
          titleTaskInput.value,
          descInput.value,
          priorityListSelect.value,
          dueDateInput.value
     );

     addTaskToDom(taskItem);

     exportDataToStorage(myProjects);

})



const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    tabs.forEach(tab => tab.classList.remove('active'));

    const activeProjectId = tab.dataset.projectId;

    renderTasks(activeProjectId);

    tab.classList.add('active');

    console.log('rendering the tasks of',activeProjectId);
  });
});








function renderTasks(projectId) {

     const taskListContainer = document.querySelector(".task-list-container");
     taskListContainer.innerHTML = "";

     const projectIndex = myProjects.findProjectIndex(projectId);
     const TaskListByProjectIndex = myProjects.getProject(projectIndex).getTasks();

     TaskListByProjectIndex.forEach((task)=>{
         const newTaskItem = createTaskItem(
             task.id,
             task.title,
             task.description,
             task.priority,
             task.dueDate
         );
         addTaskToDom(newTaskItem);
     });

 }


function renderProjects(projectCollection) {
     const container = document.querySelector('.projects-container');
     container.innerHTML = "";
     projectCollection.printAll().forEach((newProject) => {

          if(newProject.id === "default"){

               const defaultProj = createDefaultProject(
                    newProject.id,
                    newProject.name
                );
               addProjectToNav(defaultProj);

               newProject.tasks.forEach(() => {
                    renderTasks(newProject.id);
               });

          }else{
               const projectTab =  createProjectTab(newProject.id,newProject.name);
               addProjectToNav(projectTab);
          }

     });
 }








