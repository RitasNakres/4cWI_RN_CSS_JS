const todos = [
  { id: 1, title: "putzen", isDone: false },
  { id: 2, title: "kochen", isDone: true },
  { id: 3, title: "einkaufen", isDone: false },
  { id: 4, title: "lernen", isDone: false },
];

let maxId = 4;

document.getElementById("input").addEventListener("change", (event) => {
  const newTask = {
    id: ++maxId,
    title: event.target.value,
    isDone: false,
  };
  todos.push(newTask);
  renderTasks();
  event.target.value = "";
});

const renderTasks = () => {
  const html = todos
    .map(
      (task) => `
      <div class="task ${task.isDone ? "done" : ""}">
        ${task.title}
        <br />
        <button onClick="setIsDone(${task.id})">Done</button>
        <button onClick="deleteTask(${task.id})">Delete</button>
      </div>`

    )
    .join("");
  document.getElementById("todos").innerHTML = html;
};

renderTasks();

const setIsDone = (id) => {
  const task = todos.find((task) => task.id === id);
  task.isDone = !task.isDone;
  renderTasks();
}


const deleteTask = (id) => {
  todos.splice(todos.findIndex((task) => task.id === id), 1);
  renderTasks();
};


