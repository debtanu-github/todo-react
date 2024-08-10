function AddToDo() {
  return (
    <div className="grid-container">
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Add task here" />
        </div>
        <div className="col-2">
          <input type="date" name="date" id="date" />
        </div>
        <div className="end col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
