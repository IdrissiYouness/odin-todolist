import { createDiv, createBtn} from "./dom-elements";
import { createTextInputHolder,
         createTextAreaHolder,
         createDateInputHolder } from "./input-holders";

import { renderCloseModalBtn } from "../utils/icons-rendering";


const createProjectModal = () => {

    const modal = createDiv("modal-container");
    modal.setAttribute("id","add-project-modal");

    const modalBox = createDiv("modal-box");

    const form = document.createElement('form');
    form.setAttribute('action', '#');

    const projectNameHolder = createTextInputHolder(
        "title","Project name","title-project",""
    );

    const projectNameInput = projectNameHolder.querySelector('input');

    const confirmModalButton = createBtn("confirm-add-btn");
    confirmModalButton.classList.add("btn");
    confirmModalButton.textContent = "Add new Project";

    modal.appendChild(modalBox);
    modalBox.appendChild(form);
    renderCloseModalBtn(modalBox);
    form.appendChild(projectNameHolder);
    form.appendChild(confirmModalButton);

    return {
        modal,
        projectNameInput,
        confirmModalButton,
    };

};


const createTaskModal = () =>{

    const modal = createDiv("modal-container");
    modal.setAttribute("id","add-task-modal");

    const modalBox = createDiv("modal-box");

    const form = document.createElement("form");
    form.setAttribute("action","#");

    const titleTaskInputHolder = createTextInputHolder(
        "title","Title","title-task",""
    );

    const titleTaskInput = titleTaskInputHolder.querySelector('input');

    const descInputHolder = createTextAreaHolder();

    const descInput = descInputHolder.querySelector('textarea');

    const dueDateInputHolder = createDateInputHolder(
        "due-date","Due date","due-date-input"
    );

    const dueDateInput = dueDateInputHolder.querySelector('input');

    const confirmModalButton = createBtn("confirm-add-button");
    confirmModalButton.classList.add("btn");
    confirmModalButton.textContent = "Add new Task";

    modal.appendChild(modalBox);
    modalBox.appendChild(form);
    renderCloseModalBtn(modalBox);
    form.appendChild(titleTaskInputHolder);
    form.appendChild(descInputHolder);
    form.appendChild(dueDateInputHolder);
    form.appendChild(confirmModalButton);

    return{
        modal,
        titleTaskInput,
        descInput,
        dueDateInput,
        confirmModalButton,
    };
}


export {createProjectModal,createTaskModal}
