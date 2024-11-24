export default function task(id, title, description, priority, dueDate){
    const getId = ()=> id;
    const getTitle = ()=> title;
    const getDescription = ()=> description;
    const getDueDate = ()=> dueDate;
    let isCompleted = false;
    const getStatus = () => isCompleted;
    const getPriority = () => priority;
    const setTitle = newTitle => title = newTitle;
    const setDescription = newDesc => description = newDesc;
    const setDueDate = newDueDate => dueDate = newDueDate;
    const setStatus = newStatus => isCompleted = newStatus;

    const printDetails = ()=> {
      console.log(`ID: ${getId()}\nTitle: ${getTitle()}\nDescription: ${getDescription()}\nPriority: ${getPriority()}\nDue Date: ${getDueDate()}`);
    }

    return {
      getId,
      getTitle,
      getDescription,
      getPriority,
      getDueDate,
      setTitle,
      setDescription,
      setDueDate,
      getStatus,
      setStatus,
      printDetails
    }
  }