const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const clearContainerBtn = document.getElementById("clear-container");
const warning = document.getElementById("warning");

addTaskBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addTask();
});

clearContainerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clearContainer();
});

function addTask() {
  if (taskInput.value == "") {
    alert("Введите задачу!");
  } else {
    const task = document.createElement("div");
    task.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    const taskText = document.createElement("label");
    taskText.className = "task-text";
    taskText.textContent = taskInput.value;

    const deleteBtn = document.createElement("div");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "\u00D7";

    const textCheckboxWrapper = document.createElement("div");
    textCheckboxWrapper.className = "text-checkbox-wrapper";

    textCheckboxWrapper.append(checkbox, taskText);
    task.append(textCheckboxWrapper, deleteBtn);
    taskContainer.appendChild(task);

    taskInput.value = "";
    taskInput.focus();

    clearContainerBtn.disabled = false;
    warning.style.display = "none";

    deleteBtn.addEventListener("click", () => {
      taskContainer.removeChild(task);
      showWarning();
    });
  }
}

function clearContainer() {
  const allTasks = document.querySelectorAll(".task");

  for (let item of allTasks) {
    item.remove();
  }

  clearContainerBtn.disabled = true;
  warning.style.display = "block";
}

function showWarning() {
  if (!taskContainer.hasChildNodes()) {
    clearContainerBtn.disabled = true;
    warning.style.display = "block";
  }
}
