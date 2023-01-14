

import changeActiveProject  from "./changeActiveProject";
import addProject from "./addProject";
import  {projectModal} from "./addProjectModal";
import addToDo from "./addTodo";
import { toDoModal} from "./addTodoModal";


export default function main() {
    // console.log("testing");

    const main = document.getElementById("main-content");
  
    
    
    main.innerHTML = `
            ${projectModal}
            ${toDoModal}
              <div class="col-lg-5  p-4 ">
                  <h3 class="text-center p-0">Inbox</h3>
                  <ul class="list-group " id="todo-add">
                  
                 

                </ul>
                  <li class="list-unstyled ">
                    <div class="d-grid gap-2 col-lg-1  pt-4 mx-auto">
                      <!-- Button trigger modal -->
                          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#todo">
                          <i class="fas fa-plus glyphicon "></i></button>
                          </button>  
                    </div>
                  </li>
                  
                  <hr />

                  <h3 class="text-center">Projects</h3>
                  <div class="row ">
                  <div class="col-md-12" >
                    <ul class="list-group  ">
                      <li class="list-group-item ">
                        <div class="d-grid gap-4 " id="active-project">
                         
                        </div>
                      </li>
                    </ul>
                    </div>
                  </div>
              </div>`;
  addProject();
  addToDo();

 

    return main;
  }
  


//   <button class="btn btn-outline-primary active" type="button">
//   <h3>Learn React </h3>
// </button>
// <button class="btn btn-outline-primary" type="button">
//   <h3>Exercise</h3>
// </button>