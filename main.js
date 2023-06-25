document.addEventListener("DOMContentLoaded", function() {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  const addButton = document.getElementById("add-button");

  addButton.addEventListener("click", addTask);

  listContainer.addEventListener("click", checkTask);

  function addTask() {
    if (inputBox.value === '') {
      alert("You must write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      li.classList.add("task");
      listContainer.appendChild(li);
      inputBox.value = '';
    }
  }

  function checkTask(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'LI') {
      clickedElement.classList.toggle("checked");
    }
  }
});
