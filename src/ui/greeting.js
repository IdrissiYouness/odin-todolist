import { createDiv, createHeading } from "./dom-elements";
import { format } from "date-fns";


export function createMainGreeting(){

    const mainGreetingDiv = createDiv("main-heading");
    const greetingHeader = createGreetingHeader();
    const nowDate = createDate();

    mainGreetingDiv.appendChild(greetingHeader);
    mainGreetingDiv.appendChild(nowDate);

    return mainGreetingDiv;
}


function createDate(date = new Date()){

    const dayOfWeek = format(date, "EEE");
    const dayOfMonth = format(date, "d");
    const month = format(date, "MMMM");
    const year = format(date, "yyyy");
    const formattedDate = `Today, ${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
    const todayDate = createHeading(2,`${formattedDate}`);
    todayDate.classList.add("today-date");

    return todayDate;
}


function createGreetingHeader(){

    const currentHour = new Date().getHours();


    let timeOfDay = "Morning";

    if (currentHour >= 12 && currentHour < 17) {

        timeOfDay = "Afternoon";

    } else if (currentHour >= 17) {

        timeOfDay = "Evening";
    }

    return createHeading(1,`Good ${timeOfDay}, User!`);
}
