import { createDiv, createHeading } from "./dom-elements";
import project from "../modules/project";
import { renderTasks } from "./main-content";
export default function createNav(){
    const nav = document.createElement('nav');

    nav.appendChild(createProjectHeading());
    nav.appendChild(createProjectListContainer());
    nav.appendChild(createAddNewProjectBtn());

    return nav;
}


function createProjectHeading(){
    const h2 = createHeading(2,"Projects");
    return h2;
}


function createProjectListContainer(){
    const projectList = createDiv("projects-container");
    return projectList;
}


function createAddNewProjectBtn(){
  const addNewProjectBtn = createDiv("btn");
  addNewProjectBtn.classList.add('open-modal-btn');
  addNewProjectBtn.setAttribute('data-modal-id','add-project-modal');
  addNewProjectBtn.textContent = "Create New Project";
  return addNewProjectBtn;
}


export function createDefaultProject(newProjectId, newProjectName){
    const defaultProject = createDiv('tab');
    defaultProject.dataset.projectId = newProjectId;
    defaultProject.classList.add('project','active');
    defaultProject.textContent = newProjectName;
    return defaultProject;
}


export function createProjectTab(newProjectId,newProjectName) {
    const projectTab = createDiv('tab');
    projectTab.classList.add('project');
    projectTab.dataset.projectId = newProjectId;
    projectTab.textContent = newProjectName;
    return projectTab;
}



export function addProjectToNav(project){
    const div = document.querySelector('.projects-container');
    div.appendChild(project);
}


export function removeProjectFromNav(project) {
    const div = document.querySelector('.projects-container');
    div.removeChild(project);
}



export function getActiveProjectId() {
    const activeTab = document.querySelector('.tab.active');
    return activeTab ? activeTab.dataset.projectId : null;
}

export function getProjectById(projectCollection, projectId) {
    return projectCollection.getProject(projectCollection.findProjectIndex(projectId));
}
