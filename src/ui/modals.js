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

    const projectNameInput = createTextInputHolder(
        "title","Project name",
        "title-input","Enter project name..."
    );

    const confirmModalButton = createBtn("confirm-add-btn");

    modal.appendChild(modalBox);
    modalBox.appendChild(form);
    renderCloseModalBtn(modalBox)
    form.appendChild(projectNameInput);
    form.appendChild(confirmModalButton);

    return {
        modal,
        projectNameInput,
        confirmModalButton,
    };
};

export {createProjectModal}
