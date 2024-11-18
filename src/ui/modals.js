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

    const confirmModalButton = createBtn("confirm-add-btn");

    modal.appendChild(modalBox);
    modalBox.appendChild(form);
    renderCloseModalBtn(modalBox);
    form.appendChild(projectNameHolder);
    form.appendChild(confirmModalButton);

    return {
        modal,
        projectNameHolder,
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
    const descInputHolder = createTextAreaHolder();
    const dueDateInputHolder = createDateInputHolder(
        "due-date","Due date","due-date-input"
    );
    const confirmModalButton = createBtn("confirm-add-button");

    modal.appendChild(modalBox);
    modalBox.appendChild(form);
    renderCloseModalBtn(modalBox);
    form.appendChild(titleTaskInputHolder);
    form.appendChild(descInputHolder);
    form.appendChild(dueDateInputHolder);
    form.appendChild(confirmModalButton);

    return{
        modal,
        titleTaskInputHolder,
        descInputHolder,
        dueDateInputHolder,
        confirmModalButton,
    };
}


export {createProjectModal,createTaskModal}
