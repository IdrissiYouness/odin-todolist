import { createTask, editTask, deleteTask, getTaskPriority, toggleCompletedTask, isOverDue } from './modules/task.js';
import ProjectModule from './modules/project.js';

const { createProject, filterCompletedTaskList } = ProjectModule;

const project = createProject("Main Project");
const project2 = createProject("Main Project 2")

const projects = [
    project,project2
]

console.log("a project created:",project);

const task1 = createTask("Complete assignment", "Finish the math assignment", "2024-11-02", "High");
const task2 = createTask("Grocery shopping", "Buy groceries for the week", "2024-11-05", "Medium");


const task3 = createTask("Home chores","Laundry","2024-11-06");

editTask(task1, "Complete assignment - revised", "2024-11-03", "Medium");
console.log("Edited task 1:", task1);

project.tasks.push(task1, task2);
console.log("Tasks added to project:", project.tasks);

project2.tasks.push(task3);

toggleCompletedTask(task2);
console.log("Toggled completion of task 2:", task2);


const overdueStatus = isOverDue(task2.dueDate);
console.log(`Is task 2 overdue? ${overdueStatus}`);


const completedTasks = filterCompletedTaskList(project);
console.log("Completed tasks in project:", completedTasks);


console.log(projects);

