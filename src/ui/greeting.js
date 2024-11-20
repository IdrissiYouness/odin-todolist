import { createDiv, createHeading } from "./dom-elements";


export function createMainGreeting(){

    const mainGreetingDiv = createDiv("main-heading");
    const greetingHeader = createGreetingHeader();
    const nowDate = createDate();

    mainGreetingDiv.appendChild(greetingHeader);
    mainGreetingDiv.appendChild(nowDate);

    return mainGreetingDiv;
}


function createDate(){
    const todayDate = createHeading(2,"Today is...");
    todayDate.classList.add("today-date");
    return todayDate;
}


function createGreetingHeader(){
    return createHeading(1,"Good Morning!,User");
}
