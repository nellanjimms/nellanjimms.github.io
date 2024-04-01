//Constants declared for input button and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');

//listener for enter key.Used to ass a new task
taskInput.addEventListener("keyup",(e)=>{
    if (e.key=="Enter"){createTask();}});

//onclick event for add button
document.querySelector('#add').onclick = function(){
    createTask();}

//function to create task 
function createTask(){
    if(taskInput.value.length==0){
        alert("The task field is blank. Enter a task name and try again.");}
    else {
        //inserts HTML that creates each task
        taskSection.innerHTML += 
        `<div class="task">
        <label id="taskname">
        <input onclick = "updateTask(This)" type="checkbox" id="check-task">
        <p id="added">${document.querySelector('#newtask input').value}</p>
        </label>
        <div class ="delete">
        <i class = "uil uil-trash"></i></div></div>`; 
        var current_tasks = document.querySelectorAll(".delete");
        for (var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove(); }}
        taskInput.value = "";
    }}

    
function updateTask(task){
    let taskItem = task.parentElement.lastElementChild;
    if(task.checked){
        taskItem.classList.add("checked");
    }else {
        taskItem.classList.remove("checked");
    }
}