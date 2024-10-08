const express = require("express");
const router = express.Router();
const PORT = 3000;
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/", router); // add router in the Express app.

app.listen(PORT, () => {
  console.log("Esta corriendo machin perro en el 3k");
});
let hardArray = [];
router.get("/list", async (req, res) => {
  try {
    let hardTask1 = {
      title: "Tarea1",
      description: "Factory Method",
      dueDate: "mm/dd/aaaa",
      priority: "en FA papito",
    };
    let hardTask2 = {
      title: "Tarea2",
      description: "Abstract Factory",
      dueDate: "mm/dd/aaaa",
      priority: "en FA papito",
    };
    hardArray = [hardTask1, hardTask2];
    res.json(hardArray);
  } catch (error) {
    console.log("Matricula 666 en CETYS *emoji de diablo*");
  }
});

router.post("/create", async (req, res) => {
  try {
    elemento = JSON.parse(req);
    hardArray.push(elemento);
  } catch (error) {
    console.log("Matricula 666 en CETYS *emoji de diablo*");
  }
});
