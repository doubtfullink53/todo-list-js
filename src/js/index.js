// Import our custom CSS
import "../scss/styles.scss";

// Import all bootstrap
import * as bootstrap from "bootstrap";


import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// import _ from 'lodash';

import navBar  from "./navbar";
import sideBar from "./sidebar";
import main from "./main";


// import main from "./main";

// export default function component() {
  

//   const element = document.createElement("div");
//   element.id = "content"
//   element.setAttribute("class", "content")

 
  

//   return element;
// }



// document.body.appendChild(component());
document.body.appendChild(navBar());
document.body.appendChild(sideBar());
// document.body.appendChild(main());
main();
