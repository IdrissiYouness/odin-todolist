import './styles/style.css';
import { createDiv } from './ui/dom-elements';
import createNav, {renderProjectsToNav,getActiveProjectId} from "./ui/nav";
import createMainContent ,{renderTasks} from './ui/main-content';
import { createProjectModal,createTaskModal} from "./ui/modals";
import { attachEventListeners } from './events/event-listeners';
import { importDataFromStorage,exportDataToStorage } from './utils/local-storage.js';

import task from './modules/task.js';
import project from './modules/project.js';
import projectCollection from './modules/project-collection.js';


const mainContent = createDiv("main-container");
const navigation = createNav();
const main = createMainContent();

const { modal: projectModal,projectNameInput,confirmModalButton:confirmProjectBtn } = createProjectModal();
const { modal: taskModal,titleTaskInput,descInput,priorityListSelect,dueDateInput,confirmModalButton:confirmTaskBtn } = createTaskModal();

main.appendChild(projectModal);
main.appendChild(taskModal);

mainContent.appendChild(navigation);
mainContent.appendChild(main);
document.body.appendChild(mainContent);


const myProjects = projectCollection();
importDataFromStorage(myProjects);

if (myProjects.findProjectName("Default") === -1) {
     const defaultProj = project('default', 'Default');
     myProjects.addProject(defaultProj);
     exportDataToStorage(myProjects);
 }

 renderProjectsToNav(myProjects);
 renderTasks(myProjects.getProject(0));


document.addEventListener('DOMContentLoaded', () => {
     attachEventListeners();
 });


 //using Date to generate a unique Id


confirmProjectBtn.addEventListener('click',(event)=>{
     event.preventDefault();
     const newProj = project(Date.now().toString(), projectNameInput.value);
     myProjects.addProject(newProj);
     exportDataToStorage(myProjects);
     renderProjectsToNav(myProjects);
     /*
     createAndAddProjectToNav(newProj);
     */
})


confirmTaskBtn.addEventListener('click',(event)=>{
     event.preventDefault();

     const newTask = task(Date.now().toString(),
     titleTaskInput.value,
     descInput.value,
     priorityListSelect.value,
     dueDateInput.value);

     const activeProjectId = getActiveProjectId();

     const activeProject = myProjects.getProject(
          myProjects.findProjectIndex(activeProjectId)
      );

     activeProject.addATask(newTask);
     exportDataToStorage(myProjects);

     // using render tasks temporary to fix  undefined task info bug
     renderTasks(activeProject);

     /*
     const taskItem = createTaskItem(newTask);
     addTaskToDom(taskItem);
     */

})

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    tabs.forEach(tab => tab.classList.remove('active'));


    tab.classList.add('active');

    const activeProjectId = tab.dataset.projectId;
    const activeProject = myProjects.getProject(
           myProjects.findProjectIndex(activeProjectId)
    );
    renderTasks(activeProject);
  });
});




