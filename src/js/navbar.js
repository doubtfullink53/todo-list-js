import { Collapse } from "bootstrap";




export default function navBar() {
    // console.log("testing");
    // const navbar = document.createElement("div");
    
    // navbar.appendChild(navbar);
    const navbar = document.createElement("nav");
    

    navbar.innerHTML = ` 
     <nav class=" bg-secondary text-center text-white fs-1 ">
     <div class="container ">
      <a class="navbar-brand " href="#">To Do List</a>
     
    </div>
  </nav>`
  return navbar;
    
  }

