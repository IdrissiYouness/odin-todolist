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
    addNewTaskBtn.classList.add('open-modal-btn');
    addNewTaskBtn.setAttribute('data-modal-id','add-task-modal');
    addNewTaskBtn.textContent = "Create new task";
    return addNewTaskBtn;
}


export function createTaskItem(task){

    const taskGiantItem = createDiv("task-giant-item");
    taskGiantItem.dataset.taskId = task.id;
    const taskItemContainer = createDiv("task-item-container");

    const checkboxHolder = createDiv("check-box");
    checkboxHolder.appendChild(createCheckBox("done"));

    const taskTitle = createPara("task-title");
    taskTitle.textContent = task.title;

    const priorityTag = document.createElement('span');
    priorityTag.classList.add('priority-tag');
    priorityTag.textContent = task.priority;

    const taskHolder = createDiv("task-holder");
    taskHolder.appendChild(taskTitle);
    taskHolder.appendChild(priorityTag);

    const dueDateHolder = createPara("due-date");
    dueDateHolder.textContent = task.dueDate;



    const {
        actionsDiv:actions
    } = createActionsDom();


    const descriptionHolder = createDiv("desc-container");
    const taskDescription = createPara("task-desc");
    taskDescription.textContent = task.description;
    descriptionHolder.appendChild(taskDescription);


    taskGiantItem.appendChild(taskItemContainer);
    taskGiantItem.appendChild(descriptionHolder);

    taskItemContainer.appendChild(checkboxHolder);
    taskItemContainer.appendChild(taskHolder);
    taskItemContainer.appendChild(dueDateHolder);
    taskItemContainer.appendChild(actions);

    return taskGiantItem;
}



export function renderTasks(project) {
    const taskListContainer = document.querySelector(".task-list-container");
    taskListContainer.innerHTML = "";

    project.getTasks().forEach(task => {
        const taskElement = createTaskItem(
            task
        );
        addTaskToDom(taskElement);
    });
}



export function addTaskToDom(task){
    const div = document.querySelector('.task-list-container');
    div.appendChild(task);
}

export function  removeTaskFromDom(task){
    const div = document.querySelector('.task-list-container');
    div.removeChild(task);
}
