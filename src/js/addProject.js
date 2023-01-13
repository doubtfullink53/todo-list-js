import changeActiveProject from "./changeActiveProject";

export default function addProject (){
    const saveBtn = document.getElementById("save-btn");
   
    const project = document.getElementById("active-project");


   const projects = []


     
    function displayProjects(){
        // for (let i = 0; i < projects.length; i++) {
        //     project.innerHTML += `
        //     <button class="btn btn-outline-primary " type="button">
        //     <h3>${projects[i]} </h3>
        //     </button>
        //     `
        //     console.log(i)
        //   }
     }
     

     saveBtn.addEventListener('click', ()=>{
      const projectText = document.getElementById("project-text");
      const value1 = projectText?.value || '';

      console.log(value1)
        project.innerHTML = "";
        // projects.push("Learn React")
        displayProjects();
        changeActiveProject();
     
       
         })

   
    
}