

export default function addToDo(){
    let addBtn = document.getElementById("save-btn-todo");
   
    let toDo = document.getElementById("todo-add");


    let toDoArray = []

    function displaytoDos(){
        let toDoObjectArray = [];
        for (let i = 0; i < toDoArray.length; i++) {
            toDo.innerHTML += `
            <li class="list-group-item ">
                <div class="form-check d-flex justify-content-evenly">
                    <input class="form-check-input align-middle" type="checkbox" value="" id="checkbox-${i}">
                    <label class="form-check-label" for="checkbox-${i}" style="width: 75%;">${toDoArray[i]}</label>
                    <input class="" type="date" value="">
                </div>
            </li>
            `;
            let checkbox = document.getElementById(`checkbox-${i}`);
            let item = {id: `checkbox-${i}`, label: toDoArray[i], checked: false};
            toDoObjectArray.push(item);
            checkbox.addEventListener("click", function(){
                let itemIndex = toDoObjectArray.findIndex(i => i.id === this.id);
                toDoObjectArray[itemIndex].checked = this.checked;
                console.log(toDoObjectArray)
            });
        }
    }
    
     
     addBtn.addEventListener('click', ()=>{
        const todDoText = document.getElementById("todo-text");
        const value2 = todDoText ?.value || '';
  
        toDoArray.push(value2)
        console.log(value2)
        console.log("clicked")
        console.log("clicked save button")
          toDo.innerHTML = "";
        


        displaytoDos();
    
     
       
         })

   
    
}

