let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task.length > 0) {
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${task}</span>
      <button type="button" class="btn btn-sm btn-danger" onclick="removeTask(${index})">
        X
      </button>
    `;

    taskList.appendChild(li);
  });
}
