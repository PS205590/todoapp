let addTask = document.getElementById('addTask');
let addBtn = document.getElementById('addBtn');
let allTask = document.getElementById('allTask');

addBtn.addEventListener('click', function(){
    var taskList = document.createElement('li');
    taskList.innerText = addTask.value;
    allTask.appendChild(taskList);
    addTask.value = "";
    taskList.addEventListener('click', function(){
        taskList.style.textDecoration = "line-through";
    });
    taskList.addEventListener('dblclick', function(){
        allTask.removeChild(taskList);
    });
})