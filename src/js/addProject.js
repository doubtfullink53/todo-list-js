import changeActiveProject from "./changeActiveProject";

export default function addProject (){
    const saveBtn = document.getElementById("save-btn");
   
    const project = document.getElementById("active-project");


   const projects = []

console.log(projects)
     
    function displayProjects(){
        for (let i = 0; i < projects.length; i++) {
            project.innerHTML += `
            <button class="btn btn-outline-secondary btn-lg btn-block" type="button">
            <h3>${projects[i]} </h3>
            </button>
            `
            
          }
     }
     

     saveBtn.addEventListener('click', ()=>{
      const projectText = document.getElementById("project-text");
      const value1 = projectText ?.value || '';

      projects.push(value1)
      console.log(value1)
      console.log("clicked save button")
        project.innerHTML = "";
        // projects.push("Learn React")
        displayProjects();
        changeActiveProject();
     
       
         })

   
    
}