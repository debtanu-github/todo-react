function ToDoItem1() {
  let taskname = "college";
  let taskdate = "14/08/24";

  return (
    <div className="grid-container">
      <div className="row">
        <div className="col-4">{taskname}</div>
        <div className="col-2">{taskdate}</div>
        <div className="end col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;
