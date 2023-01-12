export default function main() {
    // console.log("testing");

    const main = document.getElementById("main-content");
  



    main.innerHTML = `
            
              <div class="col p-4">
                  <h3>Inbox</h3>
                 
                  <hr />
                  <h3>Day</h3>
                  <ul class="list-group">
                    <li class="list-group-item align-end">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                  </ul>
                  <hr />
                  <h3>Projects</h3>
                  <ul class="list-group">
                    <li class="list-group-item align-end">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                  </ul>
              </div>`;
    return main;
  }
  