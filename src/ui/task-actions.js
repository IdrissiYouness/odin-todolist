import { createDiv } from "./dom-elements";
import { renderDeleteBtn } from "../utils/icons-rendering";


const createActionsDom = () =>{
    const actionsDiv = createDiv("actions");
    const deleteTaskIcon = renderDeleteBtn(actionsDiv);
    deleteTaskIcon.classList.add('delete-task');

    return{
        actionsDiv
    };
}

export{createActionsDom}