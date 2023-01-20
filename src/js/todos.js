// import changeActiveProject from "./changeActiveProject";


export let toDoArray = [
  {
    id: 1,
    name: "",
    date: "",
    project: "Inbox",
    checked: false,
  },
  {
    id: 3,
    name: "",
    date: "",
    project: "Today",
    checked: false,
  },
  {
    id: 4,
    name: "",
    date: "",
    project: "Week",
    checked: false,
  },
];

export default function todos() {
  // Save toDoArray to local storage before reload
  window.addEventListener("beforeunload", (event) => {
    localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
  });

  // Retrieve toDoArray from local storage on page load
  let storedToDoArray = JSON.parse(localStorage.getItem("toDoArray"));
  if (storedToDoArray) {
    toDoArray = storedToDoArray;
  }

  // Todo btn and section to add todos
  // let addToDoBtn = document.getElementById("add-todo-btn");
  let todoTitle = document.getElementById("project-title")
  let todoAdd = document.getElementById("todo-add");
  // Projects btn and section to add projects
  // let addProjectsBtn = document.getElementById("add-project-btn");
  let projectAdd = document.getElementById("project-add");

  let saveBtnToDo = document.getElementById("save-todo");
  let saveBtnProjects = document.getElementById("save-btn");
  let todoText = document.getElementById("todo-text");
  let projectText = document.getElementById("project-text");

  function deleteTodo(todo) {
    console.log(todo);

    toDoArray = toDoArray.filter((object) => {
      return object.id !== todo;
    });
    console.log(toDoArray);
    displayTodos();
  }
  window.deleteTodo = deleteTodo;

  function editDate(id) {
    let date = document.getElementById("date-" + id);
    let index = toDoArray.findIndex((todo) => todo.id === id);
    toDoArray[index].date = date.value;
    localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
    console.log(toDoArray[index]);
    displayTodos();
  }
  window.editDate = editDate;


  function displayTodos(project = "Inbox") {
    let filteredToDoArray = toDoArray.filter((todo) => {
      return todo.project === project;
    });
  
    todoAdd.innerHTML = "";
    for (let i = 0; i < filteredToDoArray.length; i++) {
      let todo = filteredToDoArray[i];
      if (todo.project === project) {
          todoAdd.innerHTML += `
          <li class="list-group-item"> 
            <div class="form-check d-flex justify-content-evenly "> 
              <input class="form-check-input align-middle p-3" type="checkbox" value="" id="checkbox-${todo.id}" ${todo.checked ? "checked" : ""} onclick="editCheckMark(${todo.id})"> 
              <input class="form-control" type="text" value="${todo.name}" id="todo-text-${todo.id}" onchange="editTodo(${todo.id})" > 
              <input class="ms-1" type="date" value="${todo.date}" id="date-${todo.id}" onchange="editDate(${todo.id})">
      
              <div class="ps-3"> 
                <button class="btn btn-danger " id="delete-todo-${todo.id}" onclick="deleteTodo(${todo.id})">x</button> 
            </div> 
          
              </div>
          </li> `;
      }
    }
    todoTitle.innerHTML = project;
  } 
  
  function editCheckMark(id) {
    let checkbox = document.getElementById("checkbox-" + id);
    let index = toDoArray.findIndex((todo) => todo.id === id);
    toDoArray[index].checked = checkbox.checked;
    // console.log(toDoArray)
    // displayTodos();
  }
  window.editCheckMark = editCheckMark;

  function editTodo(id) {
    let todoText = document.getElementById("todo-text-" + id);
    let index = toDoArray.findIndex((todo) => todo.id === id);
    toDoArray[index].name = todoText.value;

    localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
    console.log(toDoArray);
    displayTodos();
  }

  window.editTodo = editTodo;

  let projects = ["Inbox", "Today", "Week"];

  function deleteProject(projectName) {
    toDoArray = toDoArray.filter((todo) => todo.project !== projectName);
    localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
    displayTodos();
    displayProjects();
  }

  window.deleteProject = deleteProject;

  function displayProjects() {
    let projects = new Set();
    for (let i = 0; i < toDoArray.length; i++) {
      toDoArray[i].project == "" ? "inbox" : projects.add(toDoArray[i].project);
    }
    projectAdd.innerHTML = "";
    for (let project of projects) {
      if (project === "Inbox" || project === "Today" || project === "Week") {
        projectAdd.innerHTML += `
      <li class="list-group-item  justify-content-between  ">
      <div class="d-grid gap-0 col-9 mx-auto"> 
     <button class="btn btn-outline-primary "> ${project} </button>
     </div> 
    </li>
          `;
      } else {
        projectAdd.innerHTML += `
        <li class="list-group-item d-flex justify-content-center align-items-center">
          <button class="btn btn-outline-primary col-7 ">${project}
              
          </button>
          <span class="btn btn-outline-danger ml-auto btn-sm  m-1 p-3 " onclick="deleteProject('${project}')"> </span>
        </li>
          `;
      }
    }
    
  }

  let activeProject = "Inbox"; // default project

  function addToDoToArray() {
    if (!todoText.value) {
      alert("Please add a text for new to-do");
      return;
    }
    toDoArray.push({
      id: Math.floor(Math.random() * (1000 - 4) + 4),
      name: todoText.value,
      date: "",
      project: activeProject,
      checked: false,
    });
    
    todoAdd.innerHTML = "";
    displayTodos();
    
    console.log(toDoArray);
  }

  projectAdd.addEventListener("click", (e) => {
    let project = e.target.textContent.trim();
    activeProject = project;
    displayTodos(project);
  });

  function addProjectsToArray() {
    toDoArray.push({
      id: Math.floor(Math.random() * (1000 - 4) + 4),
      name: todoText.value,
      date: "",
      project: projectText.value,
    });
    console.log(toDoArray);
    todoAdd.innerHTML = "";
    projectAdd.innerHTML = "";
    
    displayTodos();
    displayProjects();
  }

  saveBtnToDo.addEventListener("click", () => {
    addToDoToArray();
  });

  saveBtnProjects.addEventListener("click", () => {
    addProjectsToArray();
  });
 
  displayTodos();
  displayProjects();
}
