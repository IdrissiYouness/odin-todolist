import { createTask, editTask, deleteTask, getTaskPriority, toggleCompletedTask, isOverDue } from './modules/task.js';
import ProjectModule from './modules/project.js';

const { createProject, filterCompletedTaskList } = ProjectModule;

const project = createProject("Main Project");

console.log("a project created:",project);

const task1 = createTask("Complete assignment", "Finish the math assignment", "2024-11-02", "High");
const task2 = createTask("Grocery shopping", "Buy groceries for the week", "2024-11-05", "Medium");


editTask(task1, "Complete assignment - revised", "2024-11-03", "Medium");
console.log("Edited task 1:", task1);

project.tasks.push(task1, task2);
console.log("Tasks added to project:", project.tasks);


toggleCompletedTask(task1);
console.log("Toggled completion of task 1:", task1);


const overdueStatus = isOverDue(task1.dueDate);
console.log(`Is task 1 overdue? ${overdueStatus}`);


const completedTasks = filterCompletedTaskList(project);
console.log("Completed tasks in project:", completedTasks);


deleteTask(project.tasks, 1);
console.log("Tasks after deletion:", project.tasks);