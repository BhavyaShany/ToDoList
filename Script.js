const newTaskInput = document.getElementById("newTask");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

// Add new task
addBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="done-btn">✔</button>
  `;
  taskList.appendChild(li);
  newTaskInput.value = "";

  li.querySelector(".done-btn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });
});

// Clear completed tasks
clearBtn.addEventListener("click", () => {
  const completedItems = document.querySelectorAll("li.completed");
  completedItems.forEach(item => item.remove());
});
