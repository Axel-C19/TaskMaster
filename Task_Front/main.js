document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/list").then((res) => {
    if (!res.ok) {
      console.log("error en la respuesta, odio a cetys");
    }
  });
});
