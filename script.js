// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Append to task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";

  // Add Edit/Delete functionality
  li.querySelector(".edit-btn").addEventListener("click", () => {
    const newTaskText = prompt("Edit your task:", taskText);
    if (newTaskText) {
      li.querySelector("span").textContent = newTaskText;
    }
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    taskList.removeChild(li);
  });
});
