import changeActiveProject from "./changeActiveProject";

export default function addProject (){
    const addproject = document.getElementById("add-project");
    const project = document.getElementById("active-project");

    var myModal = document.getElementById('myModal')

   const projects = []


   myModal.addEventListener('shown.bs.modal', function () {
    addproject.focus()
  })
   
     
    // function displayProjects(){
    //     for (let i = 0; i < projects.length; i++) {
    //         project.innerHTML += `
    //         <button class="btn btn-outline-primary " type="button">
    //         <h3>${projects[i]} </h3>
    //         </button>
    //         `
    //         console.log(i)
    //       }
    //  }
     

    //  addproject.addEventListener('click', ()=>{
        
        


    //     project.innerHTML = "";
    //     // projects.push("Learn React")
    //     displayProjects();
    //     changeActiveProject();
     
       
    //      })

   
    
}