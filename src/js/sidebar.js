import main from "./main"

import * as bootstrap from "bootstrap";


export default function sideBar() {
  // console.log("testing");
  const sidebar = document.createElement("header");


  sidebar.innerHTML = `

  
  <div class="container-fluid overflow-hidden ">
    <div class="row vh-100 overflow-auto">
      <div class="col-lg-0 col-sm-0 col-lg-0 px-sm-2 px-0 bg-secondary d-flex sticky-top">
          <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-0 text-white">
              <a href="/" class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  
              </a>
              <ul class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start " id="menu"> 
           
                 
                 
                  
                 
              </ul>
              
              
          </div>
      </div>
      <div class="col d-flex flex-column h-sm-100">
          <main class="row overflow-auto justify-content-center" id="main-content">
             
          </main>
          <footer class="row bg-light py-4 mt-auto">
             
          </footer>
      </div>
  </div>
</div>
  `;


  return sidebar;
}


//        <li class="nav-item ">
{/* <a href="#" class="nav-link px-sm-0 px-2 text-white" id="project-Inbox">
<i class="fa-solid fa-inbox glyphicon "></i><span class="ms-1 d-none d-sm-inline ">Inbox</span>
</a>

</li>

<li>
<a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-sm-0 px-2 text-white">
<i class="fas fa-calendar-day glyphicon "></i><span class="ms-1 d-none d-sm-inline">Today</span> </a>
</li>

<li>
<a href="#" class="nav-link px-sm-0 px-2  text-white">
<i class="fa-solid fa-calendar-week glyphicon"></i><span class="ms-1 d-none d-sm-inline">Week</span></a>
</li> */}