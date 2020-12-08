let addTask = document.getElementById("addTask");
let currentTasks = document.getElementById("currentTasks");

console.log(addTask);
console.log(currentTasks);

function addElement() {
    let newLi = document.createElement("li");
    newLi.classList.add('list-group-item', 'd-flex', 'w-100', 'mb-2');
    
    let infoDiv = document.createElement("div");
    infoDiv.classList.add('w-100', 'mr-2');
    let taskDiv = document.createElement("div");
    taskDiv.classList.add('d-flex', 'w-100', 'justify-content-between');
    let title = document.createElement("h5");
    title.classList.add('mb-1');
    title.innerHTML = "Title";
    let detailsDiv = document.createElement("div");
    let priority = document.createElement("small");
    priority.classList.add('mr-2');
    priority.innerHTML = "High priority";
    let date = document.createElement("small");
    date.innerHTML = "11:00 01.01.2000";
    let description = document.createElement("p");
    description.classList.add('mb-1', 'w-100');
    description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi error eveniet nostrum nulla pariatur repudiandae, veniam. Provident.";

    infoDiv.appendChild(taskDiv);
    taskDiv.appendChild(title);
    taskDiv.appendChild(detailsDiv);
    detailsDiv.appendChild(priority);
    detailsDiv.appendChild(date);
    infoDiv.appendChild(description);
    newLi.appendChild(infoDiv);

    let dropDiv = document.createElement("div");
    dropDiv.classList.add('dropdown', 'm-2', 'dropleft');

    let dropButton = document.createElement("button");
    dropButton.classList.add('btn', 'btn-secondary', 'h-100');
    dropButton.setAttribute("type", "button");
    dropButton.setAttribute("id", "dropdownMenuItem1");
    dropButton.setAttribute("data-toggle", "dropdown");
    dropButton.setAttribute("aria-haspopup", "true");
    dropButton.setAttribute("aria-expanded", "false");

    let dropI = document.createElement("i");
    dropI.classList.add('fas', 'fa-ellipsis-v');
    dropI.setAttribute("aria-hidden", "true");

    let dropMenu = document.createElement("div");
    dropMenu.classList.add('dropdown-menu', 'p-2', 'flex-column');
    dropMenu.setAttribute("aria-labelledby", "dropdownMenuItem1");
    dropMenu.setAttribute("x-placement", "left-start");
    dropMenu.setAttribute("data-toggle", "dropdown");
    dropMenu.setAttribute("aria-haspopup", "true");
    dropMenu.setAttribute("aria-expanded", "false");
    
    let dropComplete = document.createElement("button");
    dropComplete.classList.add('btn', 'btn-success', 'w-100');
    dropComplete.setAttribute("type", "button");
    dropComplete.innerHTML = "Complete";

    let dropEdit = document.createElement("button");
    dropEdit.classList.add('btn', 'btn-info', 'w-100', 'my-2');
    dropEdit.setAttribute("type", "button");
    dropEdit.innerHTML = "Edit";

    let dropDelete = document.createElement("button");
    dropDelete.classList.add('btn', 'btn-danger', 'w-100');
    dropDelete.setAttribute("type", "button");
    dropDelete.innerHTML = "Delete";
    
    dropDiv.appendChild(dropButton);
    dropButton.appendChild(dropI); 
    dropDiv.appendChild(dropMenu);
    dropMenu.appendChild(dropComplete);
    dropMenu.appendChild(dropEdit);
    dropMenu.appendChild(dropDelete);
    newLi.appendChild(dropDiv);
    currentTasks.appendChild(newLi);
    
    console.log(newLi);
}
