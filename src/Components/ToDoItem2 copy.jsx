function ToDoItem2() {
  let taskname = "Project";
  let taskdate = "13/08/24";

  return (
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-auto">{taskname}</div>
        <div class="col col-lg-2">{taskdate}</div>
        <div class="col col-lg-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem2;
