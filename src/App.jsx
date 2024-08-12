import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import ToDoItems from ".//Components/ToDoItems"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="todo-container">
      <AppName></AppName>
      <div className="grid-container">
        <AddToDo></AddToDo>
        <ToDoItems></ToDoItems>
      </div>
    </div>
  );
}

export default App;
