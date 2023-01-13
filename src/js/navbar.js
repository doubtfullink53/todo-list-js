import { Collapse } from "bootstrap";




export default function navBar() {
    // console.log("testing");
    // const navbar = document.createElement("div");
    
    // navbar.appendChild(navbar);
    const navbar = document.createElement("nav");
  navbar.setAttribute("class", "text-lg-center")

    navbar.innerHTML = ` \
     <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary  ">
     <div class="container ">
      <a class="navbar-brand " href="#">To Do List</a>
     
    </div>
  </nav>`
  return navbar;
    
  }

