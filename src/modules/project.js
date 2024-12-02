export default function project(id, name){

    const getId = ()=> id;
    const getName = ()=> name;
    const setName = newName => name = newName;

    const listOfTasks = [];

    const addATask = task => listOfTasks.push(task);
    const getTaskIndex = id => {
      return listOfTasks.findIndex(task => {
        return task.getId() === id;
      });
    };

    const getTaskIndexById = taskId => {
      return listOfTasks.findIndex(task => {
        return task.getId() === taskId;
      });
    };

    const removeATask = index => {
      listOfTasks.splice(index, 1);
    };

    const printTasks = ()=> {
      listOfTasks.forEach(task => {
        task.printDetails();
      });
    };

    const printDetails = ()=> {
      console.log(`ID: ${getId()}\nName: ${getName()}`);
    };

    const getTasks = () => {
      return listOfTasks.map(task => {
        return {
          id: task.getId(),
          title: task.getTitle(),
          description: task.getDescription(),
          dueDate: task.getDueDate(),
          priority: task.getPriority(),
          isCompleted: task.getStatus(),
        };
      });
    };

    const getTask = (taskId) => {
      return listOfTasks.find(task => {
        return task.getId() === taskId;
      })
    };

    return {
      getId,
      getName,
      setName,
      addATask,
      getTaskIndex,
      removeATask,
      printTasks,
      printDetails,
      getTasks,
      getTaskIndexById,
      getTask
    }
  }