document.addEventListener("DOMContentLoaded", function() {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  const addButton = document.getElementById("add-button");

  addButton.addEventListener("click", addTask);

  listContainer.addEventListener("click", checkTask);

  // Load tasks from local storage on page load
  loadTasksFromStorage();

  function addTask() {
    if (inputBox.value === '') {
      alert("You must write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      li.classList.add("task");
      listContainer.appendChild(li);
      inputBox.value = '';

      // Save tasks to local storage
      saveTasksToStorage();
    }
  }

  function checkTask(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'LI') {
      clickedElement.classList.toggle("checked");

      // Save tasks to local storage
      saveTasksToStorage();
    }
  }

  function saveTasksToStorage() {
    const tasks = Array.from(listContainer.getElementsByTagName("li")).map(li => li.innerHTML);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasksFromStorage() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task;
        li.classList.add("task");
        listContainer.appendChild(li);
      });
    }
  }
});
