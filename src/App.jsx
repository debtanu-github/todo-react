import Appname from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2 copy";
import "./App.css"
function App() {
  return (
    <center className="todo-container">
      <Appname></Appname>
      <AddToDo></AddToDo>
      <ToDoItem1></ToDoItem1>
      <ToDoItem2></ToDoItem2>
    </center>
  );
}

export default App;
