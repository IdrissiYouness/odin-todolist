import { createDiv, createPara, createCheckBox } from "./dom-elements";
import { createMainGreeting } from "./greeting";
import { createActionsDom } from "./task-actions";



export default function createMainContent(){

    const main = document.createElement('main');

    const greeting = createMainGreeting();
    const taskList = createTaskListContainer();
    const newTaskBtn = createAddNewTaskBtn();

    main.appendChild(greeting);
    main.appendChild(taskList);
    main.appendChild(newTaskBtn);


    return main;

}

function createTaskListContainer(){
    const taskListDiv = createDiv("task-list-container");
    return taskListDiv;
}


function createAddNewTaskBtn(){
    const addNewTaskBtn = createDiv("btn");
    addNewTaskBtn.classList.add('add-task-btn');
    addNewTaskBtn.setAttribute('data-modal-id','add-task-modal');
    addNewTaskBtn.textContent = "Create new task";
    return addNewTaskBtn;
}


export function createTaskItem(id,title,desc,dueDate,priority,isDone){

    const taskGiantItem = createDiv("task-giant-item");
    const taskItemContainer = createDiv("task-item-container");

    const checkboxHolder = createDiv("check-box");
    checkboxHolder.appendChild(createCheckBox("done"));

    const taskTitle = createPara("task-title");
    taskTitle.textContent = `${title}`;

    const priorityTag = document.createElement('span');
    priorityTag.classList.add('priority-tag');
    priorityTag.textContent = `${priority}`;

    const taskHolder = createDiv("task-holder");
    taskHolder.appendChild(taskTitle);
    taskHolder.appendChild(priorityTag);

    const {
        actionsDiv:actions
    } = createActionsDom();


    const descriptionHolder = createDiv("desc-container");
    const taskDescription = createPara("task-desc");
    taskDescription.textContent = `${desc}`;
    descriptionHolder.appendChild(taskDescription);


    taskGiantItem.appendChild(taskItemContainer);
    taskGiantItem.appendChild(descriptionHolder);

    taskItemContainer.appendChild(checkboxHolder);
    taskItemContainer.appendChild(taskHolder);
    taskItemContainer.appendChild(actions);

    return taskGiantItem;
}

