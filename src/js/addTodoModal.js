

    export  const toDoModal = `
   

    <!-- Modal -->
<div class="modal fade" id="todo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add Todo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"></label>
      <input type="text" class="form-control" id="todo-text" placeholder="To do title" maxlength="25" >
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-bs-dismiss="modal" class="btn btn-primary" id="save-btn-todo">Save</button>
      </div>
    </div>
  </div>
</div>

`;

