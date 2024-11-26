import { createDiv, createBtn, createPriorityListSelect} from "./dom-elements";
import { createTextInputHolder,
         createTextAreaHolder,
         createDateInputHolder } from "./input-holders";

import { renderCloseModalBtn } from "../utils/icons-rendering";


const createProjectModal = () => {

    const modal = createDiv("modal-container");
    modal.setAttribute("id","add-project-modal");

    const modalBox = createDiv("modal-box");

    const form = createDiv('form-div');

    const projectNameHolder = createTextInputHolder(
        "title","Project name","title-project",""
    );

    const projectNameInput = projectNameHolder.querySelector('input');

    const confirmProjectButton = createBtn("confirm-add-btn");
    confirmProjectButton.classList.add("btn");
    confirmProjectButton.setAttribute('id','confirm-add-project-btn');
    confirmProjectButton.textContent = "Add new Project";

    modal.appendChild(modalBox);
    modalBox.appendChild(form);
    renderCloseModalBtn(modalBox);
    form.appendChild(projectNameHolder);
    form.appendChild(confirmProjectButton);

    return {
        modal,
        projectNameInput,
        confirmProjectButton,
    };

};


const createTaskModal = () =>{

    const modal = createDiv("modal-container");
    modal.setAttribute("id","add-task-modal");

    const modalBox = createDiv("modal-box");

    const form = createDiv("form-div");

    const titleTaskInputHolder = createTextInputHolder(
        "title","Title","title-task",""
    );

    const titleTaskInput = titleTaskInputHolder.querySelector('input');

    const descInputHolder = createTextAreaHolder();

    const descInput = descInputHolder.querySelector('textarea');

    const dueDateInputHolder = createDateInputHolder(
        "due-date","Due date","due-date-input"
    );

    const priorityListSelect = createPriorityListSelect("priority-list");

    const dueDateInput = dueDateInputHolder.querySelector('input');

    const confirmTaskButton = createBtn("confirm-add-btn");
    confirmTaskButton.classList.add("btn");
    confirmTaskButton.setAttribute('id','confirm-add-task-btn');
    confirmTaskButton.textContent = "Add new Task";

    modal.appendChild(modalBox);
    modalBox.appendChild(form);
    renderCloseModalBtn(modalBox);
    form.appendChild(titleTaskInputHolder);
    form.appendChild(descInputHolder);
    form.appendChild(priorityListSelect);
    form.appendChild(dueDateInputHolder);
    form.appendChild(confirmTaskButton);

    return{
        modal,
        titleTaskInput,
        descInput,
        dueDateInput,
        priorityListSelect,
        confirmTaskButton
    };
}


export {createProjectModal,createTaskModal}
