import todo from "./todo";
import { project } from "./todo";
import changeActiveProject  from "./changeActiveProject";
// import addProject from "./addProject";
import { mainModal } from "./addProjectModal";


export default function main() {
    // console.log("testing");

    const main = document.getElementById("main-content");
  
    
    
    main.innerHTML = `
            ${mainModal}
              <div class="col p-4">
                  <h3 class="text-center">Inbox</h3>
                    
                  <li class="list-unstyled">
                      <a href="#" class="nav-link  px-sm-0 px-2 text-center">
                      <i class="fas fa-plus glyphicon  fa-5x"></i><span class="ms-1 d-none d-sm-inline "></span></a>
                  </li>
                  
                  <hr />
                  <h3 class="text-center">Projects</h3>
                    <ul class="list-group  ">
                      <li class="list-group-item ">
                        <div class="d-grid gap-2 " id="active-project">
                         
                        </div>
                      </li>
                    </ul>
                    
              </div>`;
  // addProject();

 

    return main;
  }
  


//   <button class="btn btn-outline-primary active" type="button">
//   <h3>Learn React </h3>
// </button>
// <button class="btn btn-outline-primary" type="button">
//   <h3>Exercise</h3>
// </button>