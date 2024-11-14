import { createDiv,
        createLabel,createInputText,
        createInputDate,createTextArea }
        from './dom-elements';


function createTextInputHolder(labelFor,labelText,inputId,placeholder){
    const holder = createDiv('input-holder');
    const label = createLabel(labelFor,labelText);
    const input = createInputText(inputId,placeholder);

    holder.appendChild(label);
    holder.appendChild(input);

    return holder;
}

function createTextAreaHolder(){
    const holder = createTextArea('input-holder');
    const label = createLabel('desc', 'Description');
    const textarea = createTextArea();

    holder.appendChild(label);
    holder.appendChild(textarea);

    return holder;
}


function createDateInputHolder(labelFor, labelText, inputId){
    const holder = createDiv('div-input');
    const label = createLabel(labelFor, labelText);
    const date = createInputDate(inputId);

    holder.appendChild(label);
    holder.appendChild(date);

    return div;
  }


export {createTextInputHolder,createDateInputHolder,createTextAreaHolder}



