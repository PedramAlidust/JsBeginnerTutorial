function addTask() {
    let task = document.getElementById("taskInput").value;
    
    if (task === "") {
        alert("Please enter a task.");
        return;
    }
    
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);

    document.getElementById("taskInput").value = "";
}
