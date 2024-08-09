function AddToDo() {
  return (
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <input type="text" placeholder="Note task here" />
        </div>
        <div class="col col-lg-2">
          <input type="date" name="date" id="date" />
        </div>
        <div class="col col-lg-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
