function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value.trim();

    if (task !== "") {
        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.draggable = true;
        taskElement.textContent = task;
        taskElement.addEventListener("dragstart", dragStart);
        taskElement.addEventListener("dragend", dragEnd);

        var pendingTasks = document.getElementById("pendingTasks");
        pendingTasks.appendChild(taskElement);

        taskInput.value = "";
    }
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.classList.add("dragging");
}

function dragEnd(event) {
    event.target.classList.remove("dragging");
}

document.addEventListener("DOMContentLoaded", function() {
    var taskList = document.getElementById("taskList");

    taskList.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    taskList.addEventListener("drop", function(event) {
        event.preventDefault();
        var taskId = event.dataTransfer.getData("text/plain");
        var task = document.getElementById(taskId);
        event.target.appendChild(task);
    });
    
});
// JavaScript for slide animation
const slideImages = document.querySelectorAll('.motivation-slide img');
let currentSlide = 0;

// Function to show next slide
function nextSlide() {
    slideImages[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slideImages.length;
    slideImages[currentSlide].classList.add('active');
}

// Automatically switch to next slide every 5 seconds
setInterval(nextSlide, 5000);
