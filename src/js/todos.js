import changeActiveProject from "./changeActiveProject";




export default function todos() {

   
  // Todo btn and section to add todos
  let addToDoBtn = document.getElementById("add-todo-btn");
  let todoAdd = document.getElementById("todo-add");
  // Projects btn and section to add projects
  let addProjectsBtn = document.getElementById("add-project-btn");
  let projectAdd = document.getElementById("project-add");


  let saveBtnToDo = document.getElementById("save-todo");
  let saveBtnProjects = document.getElementById("save-btn");
  let todoText = document.getElementById("todo-text");
  let projectText = document.getElementById("project-text");

  let toDoArray = [{
    id: 1,
    name: "walk the dog",
    date: "2022-01-18",
    project: "Inbox",
  },
  {
  id: 2,
  name: "Exercise",
  date: "2022-01-18",
  project: "Inbox",

  },
  {
    id: 3,
    name: "Wash my clothes",
    date: "2022-01-18",
    project: "Today",
  
    },
    {
        id: 4,
        name: "Wash my clothes",
        date: "2022-01-18",
        project: "Week",
      
    }
];

function deleteTodo(id) {
    toDoArray = toDoArray.filter(todo => todo.id !== id);
    // remove the key from the eventListeners object
    let deleteBtn = document.getElementById("delete-todo-" + id);
    deleteBtn.removeEventListener("click", deleteTodo);
    displayTodos();
}

let eventListeners = {}
function displayTodos(project) {
    todoAdd.innerHTML = "";
    toDoArray.forEach(todo => {
        if (todo.project === project || (!project && todo.project !== "")  || project === "Inbox" && toDoArray.project !== "")  {
            todoAdd.innerHTML += `
              <li class="list-group-item ">
                  <div class="form-check d-flex justify-content-evenly">
                      <input class="form-check-input align-middle" type="checkbox" value="" id="checkbox-${todo.id}">
                      <label class="form-check-label" for="checkbox-${todo.id} " style="width: 75%;">${todo.name}</label>
                      <input class="" type="date" value="${todo.date}">
                      <button class="btn btn-danger" id="delete-todo-${todo.id}">x</button>
                  </div>
              </li>
              `;
             
            let deleteBtn = document.getElementById("delete-todo-" + todo.id);
            deleteBtn.addEventListener("click", () => deleteTodo(todo.id));
        }
    });
}







  function displayProjects() {
    let projects = new Set();
    for (let i = 0; i < toDoArray.length; i++) {
       toDoArray[i].project == "" ?   "inbox" : projects.add(toDoArray[i].project);
    }
    for (let project of projects) {
        projectAdd.innerHTML += `
          <button class="btn btn-outline-secondary btn-lg btn-block" type="button" id="active-project" >
          <h3>${project} </h3>
          </button>
          `;
    }
    changeActiveProject();
}


 
let activeProject = "Inbox"; // default project

function addToDoToArray() {
    toDoArray.push({id: Math.floor(Math.random() * (1000 - 4) + 4), name: todoText.value, date: "", project: activeProject});
    todoAdd.innerHTML = "";
    displayTodos();
    console.log(toDoArray);
}

projectAdd.addEventListener("click", (e) => {
    let project = e.target.textContent.trim();
    activeProject = project;
    displayTodos(project);
});


  function addProjectsToArray(){
    toDoArray.push({project: projectText.value})
    console.log(toDoArray)
    todoAdd.innerHTML ="";
    projectAdd.innerHTML = "";
    displayProjects();
  }

  saveBtnToDo.addEventListener("click", () => {
    addToDoToArray();
  })

  saveBtnProjects.addEventListener("click", () => {
    
    addProjectsToArray();
    
   
  })
  

  

  displayTodos();
displayProjects();
window.onload = function() {
    changeActiveProject();
  }
  


}
