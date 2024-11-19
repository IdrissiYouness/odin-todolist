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
    projectList.appendChild(createProjectHolder());
    return projectList;
}



function createProjectHolder(){
    const projectHolder = createDiv("tab");
    return projectHolder;
}

//custom div btn creation
function createAddNewProjectBtn(){
  const addNewProjectBtn = createDiv("btn");
  addNewProjectBtn.classList.add('open-modal-btn');
  addNewProjectBtn.setAttribute('data-modal-id','add-project-modal');
  addNewProjectBtn.textContent = "Create New Project";
  return addNewProjectBtn;
}


export function addProjectToNav(project){
    const div = document.querySelector('.projects-container');
    div.appendChild(project);
}


export function removeProjectFromNav(project) {
    const div = document.querySelector('.projects-container');
    div.removeChild(project);
}

