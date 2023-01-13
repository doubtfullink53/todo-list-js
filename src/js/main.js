import todo from "./todo";
import { project } from "./todo";
import changeActiveProject  from "./changeActiveProject";
import addProject from "./addProject";
import { mainModal } from "./addProjectModal";


export default function main() {
    // console.log("testing");

    const main = document.getElementById("main-content");
  
    
    
    main.innerHTML = `
            ${mainModal}
              <div class="col-lg-5  p-5 ">
                  <h3 class="text-center">Inbox</h3>
                  <ul class="list-group">
                  <li class="list-group-item">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        Walk the Dog
                      </label>
                    </div>
                  
                  </li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                  <li class="list-group-item">A fourth item</li>
                  <li class="list-group-item">And a fifth one</li>
                </ul>
                  <li class="list-unstyled">
                      <a href="#" class="nav-link  px-sm-0 px-2 text-center">
                      <i class="fas fa-plus glyphicon  fa-5x"></i><span class="ms-1 d-none d-sm-inline "></span></a>
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

 

    return main;
  }
  


//   <button class="btn btn-outline-primary active" type="button">
//   <h3>Learn React </h3>
// </button>
// <button class="btn btn-outline-primary" type="button">
//   <h3>Exercise</h3>
// </button>