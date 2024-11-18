export const createDiv = (newClass) => {
    const div = document.createElement('div');
    if (newClass!==undefined) div.classList.add(newClass);
    return div;
}

export const createLabel = (labelFor,labelText) => {
    const label = document.createElement('label');
    label.setAttribute('for',labelFor)
    label.textContent = labelText;
    return label;
}

export const createInputText = (inputId,placeholder) => {
    const input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('id',inputId);
    input.setAttribute('placeholder',placeholder);
    return input;
}

export const createTextArea = () => {
    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'desc');
    //textarea.setAttribute('placeholder', 'Enter a description...');
    textarea.setAttribute('rows', '8');
    return textarea;
};

export const createInputDate = (inputId) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'date');
    input.setAttribute('id', inputId);
    return input;
};

  // H1,H2,H3...
export const createHeading = (headingLevel,headingTitle) => {
    const h = document.createElement(`H${headingLevel}`);
    h.textContent = headingTitle;
    return h;
}


export const createBtn = (newClass) => {
    const btn = document.createElement('button');
    if (newClass!==undefined) btn.classList.add(newClass);
    return btn;
}


export const createPara = (className, text) => {
    const p = document.createElement('p');
    p.classList.add(className);
    p.textContent = text;
    return p;
  }
