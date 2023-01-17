

import changeActiveProject  from "./changeActiveProject";

import  {projectModal} from "./projectModal";
import { toDoModal } from "./todoModal";
import todos from "./todos";



export default function main() {
    // console.log("testing");

    const main = document.getElementById("main-content");
  
    
    
    main.innerHTML = `
            ${projectModal}
            ${toDoModal}
              <div class="col-lg-5  p-4 ">
                  <h3 class="text-center p-0" id="project-title">placeholder</h3>
                  <ul class="list-group " id="todo-add">
                  
                 

                </ul>
                  <li class="list-unstyled ">
                    <div class="d-grid gap-2 col-lg-1  pt-4 mx-auto">
                      <!-- Button trigger modal -->
                          <button type="button" class="btn btn-outline-primary" id="add-todo-btn" data-bs-toggle="modal" data-bs-target="#todo">
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
                      
                        <div class="d-grid gap-4 " id="project-add">
                         
                        </div>
                      </li>
                      
                    </ul>
                    <div class="d-grid gap-2 col-lg-1  pt-4 mx-auto">
                      <!-- Button trigger modal -->
                          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#project">
                          <i class="fas fa-plus glyphicon "></i></button>
                          </button>  
                    </div>
                    </div>
                  </div>
              </div>`;
             
              
  todos();
  
    return main;
  }
  

