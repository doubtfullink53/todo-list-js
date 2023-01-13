
export default function changeActiveProject(){
    // change active state of buttons to one that is currently clicked
    const activeBtn = document.getElementById("active-project");
    var btns = activeBtn.getElementsByClassName("btn");
  
  
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
    
        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
    
        // Add the active class to the current/clicked button
        this.className += " active";
      });
    }
  }