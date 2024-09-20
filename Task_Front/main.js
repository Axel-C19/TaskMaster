document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/list").then(async (res) => {
    if (!res.ok) {
      console.log("error en la respuesta, odio a cetys");
      return;
    }
    const list = document.getElementById("list");
    const listaPerra = await res.json();

    listaPerra.forEach((elemento, index) => {
      const tarea = document.createElement("li");
      tarea.innerHTML = `
        <h3>Task ${index}</h3>
        <p>Title: ${elemento.title}</p>
        <p>Description: ${elemento.description}</p>
        <p>DueDate: ${elemento.dueDate}</p>
        <p>Priority: ${elemento.priority}</p>
       `;
      list.appendChild(tarea);
    });
  });
});

document.getElementById("algoperro").addEventListener(click, () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;
  console.log(title);
  fetch("http://localhost:3000/list").then(async (res) => {
    if (!res.ok) {
      console.log("error en la respuesta, odio a cetys");
      return;
    }
  });
});
