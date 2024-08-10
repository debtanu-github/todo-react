import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="todo-container">
      <AppName></AppName>
      <div className="grid-container">
        <AddToDo></AddToDo>
        <div className="item-container">
          <ToDoItem1></ToDoItem1>
          <ToDoItem2></ToDoItem2>
        </div>
      </div>
    </div>
  );
}

export default App;
