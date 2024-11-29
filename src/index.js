import './styles/style.css';
import createNav, { removeProjectFromNav } from './ui/nav';
import createMainContent ,{createTaskItem,addTaskToDom, removeTaskFromDom} from './ui/main-content.js';
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

    const defaultProjectId = "default";
    const defaultTab = document.querySelector(`.tab[data-project-id="${defaultProjectId}"]`);

    if (defaultTab) {
        defaultTab.classList.add('active');
        renderTasks(defaultProjectId);
    }

 });


const myProjects = initializeStorage();

renderProjects(myProjects);

function initializeStorage() {
     const newProjectCollection = createProjectCollection();
     importDataFromStorage(newProjectCollection);
     return newProjectCollection;
}


confirmProjectButton.addEventListener('click', (event) => {
     event.preventDefault();

     const projectName = projectNameInput.value.trim();

     if (!projectName){
       alert('Please Enter a valid Project name!');
       return;
     }

     const newId = Date.now().toString();
     const newProj = project(newId, projectName);

     myProjects.addProject(newProj);
     exportDataToStorage(myProjects);


     const newProjectTab = createProjectTab(newId, projectName);
     addProjectToNav(newProjectTab);
     attachDeleteProjectEvent(newProjectTab,newId);
     setActiveTab(newProjectTab);


     newProjectTab.addEventListener('click', (event) => {
         const clickedTab = event.currentTarget;
         setActiveTab(clickedTab);
         renderTasks(clickedTab.dataset.projectId);
     });


     projectNameInput.value = '';
     projectModal.style.display = 'none';
 });

confirmTaskButton.addEventListener('click',()=>{

     const activeProjectId = getActiveProjectId();
     const activeProjectIndex = myProjects.findProjectIndex(activeProjectId);

     if (activeProjectIndex === -1) {
          alert('this project does no exist we cannot renders its tasks!');
          return;
     }

     const newTaskId = Date.now().toString();
     const taskTitle = titleTaskInput.value.trim();
     const taskDesc =  descInput.value.trim();
     const priority = priorityListSelect.value.trim();
     const dueDate = dueDateInput.value.trim()

     if(!taskTitle || !taskDesc || !dueDate){
          alert('Empty Record please fill all fields!');
          return;
     }

     const newTask = task(
          newTaskId,
          taskTitle,
          taskDesc,
          priority,
          dueDate
     );

     const activeProject = myProjects.getProject(activeProjectIndex);
     activeProject.addATask(newTask);

     const taskItem = createTaskItem(
          newTaskId,
          taskTitle,
          taskDesc,
          priority,
          dueDate
     );
     addTaskToDom(taskItem);
     attachDeleteTaskEvent(taskItem,newTaskId,activeProjectIndex)
     exportDataToStorage(myProjects);

     titleTaskInput.value = '';
     descInput.value = '';
     priorityListSelect.value = 'Medium';
     dueDateInput.value = '';

     taskModal.style.display = 'none';
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
         attachDeleteTaskEvent(newTaskItem,task.id,projectIndex);
     });

 }

function renderProjects(projectCollection) {
     const container = document.querySelector('.projects-container');
     container.innerHTML = "";

     projectCollection.printAll().forEach((project) => {
         const projectTab =
             project.id === "default"
                 ? createDefaultProject(project.id, project.name)
                 : createProjectTab(project.id, project.name);

         addProjectToNav(projectTab);

         attachDeleteProjectEvent(projectTab,project.id);

         projectTab.addEventListener('click', (event) => {
             const clickedTab = event.currentTarget;
             setActiveTab(clickedTab);
             renderTasks(clickedTab.dataset.projectId);
         });

         if (project.id === "default") {
             setActiveTab(projectTab);
             renderTasks(project.id);
         }
     });
 }

 function setActiveTab(tab) {
     const previouslyActive = document.querySelector('.tab.active');
     if (previouslyActive) {
         previouslyActive.classList.remove('active');
     }
     tab.classList.add('active');
 }

function attachDeleteProjectEvent(projectDom,projectId){
    const deleteIcon = projectDom.lastChild;
    deleteIcon.addEventListener('click',(event)=>{
        event.stopPropagation();
        console.log('NOW I AM DELETING THIS CLICKED PROJECT');

        const projectIndex = myProjects.findProjectIndex(projectId);
        myProjects.removeProject(projectIndex);

        exportDataToStorage(myProjects);
        removeProjectFromNav(projectDom);
    });
}

function attachDeleteTaskEvent(taskDom,taskId,projectIndex){
    const deleteIcon = taskDom.firstChild.lastChild.querySelector('.delete-task');
    deleteIcon.addEventListener('click',(event)=>{
        event.stopPropagation();
        console.log('NOW I AM DELETING THIS CLICKED TASK');

        const taskIndex = myProjects.getProject(projectIndex).getTaskIndexById(taskId);
        myProjects.getProject(projectIndex).removeATask(taskIndex);

        exportDataToStorage(myProjects);
        removeTaskFromDom(taskDom);
    });
}