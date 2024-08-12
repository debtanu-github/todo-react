import ToDoItem from "./ToDoItem";

function ToDoItems() {
  const tasks = [
    { name: "college", date: "14/08/24" },
    { name: "Project", date: "13/08/24" },
    { name: "Drink Water", date: "Right Now" },
    { name: "I better learn js otherwise i cant do this properly", date: "after watching chapter 27" },
  ];
  return (
    <div className="item-container">
      {tasks.map((task, index) => (
        <ToDoItem key={index} taskname={task.name} taskdate={task.date} />
      ))}
    </div>
  );
}

export default ToDoItems;
