function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
