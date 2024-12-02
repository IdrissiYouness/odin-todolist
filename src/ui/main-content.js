
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
    const btnText = createDiv("btn-txt");
    addNewTaskBtn.classList.add('add-task-btn');
    addNewTaskBtn.classList.add('open-modal-btn');
    addNewTaskBtn.setAttribute('data-modal-id','add-task-modal');
    btnText.textContent = "Create new task";
    //renderAddIcon(addNewTaskBtn);
    addNewTaskBtn.appendChild(btnText);
    return addNewTaskBtn;
}


export function createTaskItem(newTaskId,newTitle,newDescription,newPriority,newDueDate,isCompleted){

    const taskGiantItem = createDiv("task-giant-item");
    taskGiantItem.dataset.taskId = newTaskId;
    const taskItemContainer = createDiv("task-item-container");

    const checkboxHolder = createDiv("check-box");
    const checkbox = createCheckBox("done");
    checkbox.checked = isCompleted;
    checkboxHolder.appendChild(checkbox);

    const taskTitle = createPara("task-title");
    taskTitle.textContent = newTitle;

    const priorityTag = document.createElement('span');
    priorityTag.classList.add('priority-tag',`${newPriority}`);
    priorityTag.textContent = newPriority;

    const taskHolder = createDiv("task-holder");
    taskHolder.appendChild(taskTitle);
    taskHolder.appendChild(priorityTag);

    const dueDateHolder = createPara("due-date");
    dueDateHolder.textContent = newDueDate;
    if(isOverDue(newDueDate)) dueDateHolder.classList.add('over-due');

    const {
        actionsDiv:actions
    } = createActionsDom();

    const descriptionHolder = createDiv("desc-container");
    const taskDescription = createPara("task-desc");
    taskDescription.textContent = newDescription;
    descriptionHolder.appendChild(taskDescription);


    taskGiantItem.appendChild(taskItemContainer);
    taskGiantItem.appendChild(descriptionHolder);

    taskItemContainer.appendChild(checkboxHolder);
    taskItemContainer.appendChild(taskHolder);
    taskItemContainer.appendChild(dueDateHolder);
    taskItemContainer.appendChild(actions);

    return taskGiantItem;
}

export function addTaskToDom(task){
    const div = document.querySelector('.task-list-container');
    div.appendChild(task);
}

export function  removeTaskFromDom(task){
    const div = document.querySelector('.task-list-container');
    div.removeChild(task);
}

export function isOverDue(dueDate){
    const today = new Date();
    return new Date(dueDate) < today;
}