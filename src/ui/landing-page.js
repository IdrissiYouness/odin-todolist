import { createDiv } from "./dom-elements";
import createNav from "./nav";
import createMainContent from "./main-content";
import { createTaskModal, createProjectModal } from "./modals";


const {modal:projectModal} = createProjectModal();
const {modal:taskModal} = createTaskModal();



export default function initializePageDom(){

    const pageContainer = createDiv('main-container');
    const nav = createNav();
    const main = createMainContent();

    main.appendChild(taskModal);
    main.appendChild(projectModal);

    pageContainer.appendChild(nav);
    pageContainer.appendChild(main);

    document.body.appendChild(pageContainer);

}