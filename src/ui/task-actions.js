import { createDiv } from "./dom-elements";
import { renderDeleteTaskBtn } from "../utils/icons-rendering";


const createActionsDom = () =>{
    const actionsDiv = createDiv("actions");
    renderDeleteTaskBtn(actionsDiv);

    return{
        actionsDiv
    };
}

export{createActionsDom}