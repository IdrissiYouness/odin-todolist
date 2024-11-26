import { createDiv, createHeading } from "./dom-elements";
import project from "../modules/project";

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


export function createAndAddProjectToNav(project) {
    const navContainer = document.querySelector('.projects-container');
    const projectTab = document.createElement('div');
    projectTab.classList.add('tab','project');
    projectTab.textContent = project.getName();
    projectTab.setAttribute('data-project-id', project.getId());
    navContainer.appendChild(projectTab);
}




export function addProjectToNav(project){
    const div = document.querySelector('.projects-container');
    div.appendChild(project);
}


export function removeProjectFromNav(project) {
    const div = document.querySelector('.projects-container');
    div.removeChild(project);
}

export function renderProjectsToNav(projectCollection) {
    const container = document.querySelector('.projects-container');
    container.innerHTML = "";
    projectCollection.mapProjectNameAndId().forEach(({ id, name }) => {
        const projectTab = createDefaultProject(id, name);
        addProjectToNav(projectTab);
    });
}

export function getActiveProjectId() {
    const activeTab = document.querySelector('.tab.active');
    return activeTab ? activeTab.getAttribute('data-project-id') : null;
}

export function getProjectById(projectCollection, projectId) {
    return projectCollection.getProject(projectCollection.findProjectIndex(projectId));
}
