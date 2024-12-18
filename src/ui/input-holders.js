import { createDiv,
        createLabel,createInputText,
        createInputDate,createTextArea }
        from './dom-elements';


function createTextInputHolder(labelFor,labelText,inputId,placeholder){
    const holder = createDiv('input-holder');
    const label = createLabel(labelFor,labelText);
    const textInput = createInputText(inputId,placeholder);

    holder.appendChild(label);
    holder.appendChild(textInput);

    return holder;
}

function createTextAreaHolder(){
    const holder = createDiv('input-holder');
    const label = createLabel('desc', 'Description');
    const textarea = createTextArea();

    holder.appendChild(label);
    holder.appendChild(textarea);

    return holder;
}


function createDateInputHolder(labelFor, labelText, inputId){
    const holder = createDiv('input-holder');
    const label = createLabel(labelFor, labelText);
    const date = createInputDate(inputId);

    holder.appendChild(label);
    holder.appendChild(date);

    return holder;
  }


export {createTextInputHolder,createDateInputHolder,createTextAreaHolder}



