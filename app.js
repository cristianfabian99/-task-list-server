const express = require('express');
const app = express();
const PORT = 3008
const router1 = require("./list-edit-router.js");
const router2 = require("./list-view-router.js")

app.get("/", function (req, res) {
    res.send("Bienvenido a la api Lista de Tareas");
  });


app.use( "/list", router1);

app.use( "/list", router2);

const tasks= [
  {
    id:"123456",
    isCompleted:false,
    description:"sacar al perro",
  },
  
  {
    id:"124578",
    isCompleted:true,
    description:"comprar la comida",
  }

]

app.listen(PORT,() => console.log ('el servidor esta funcionando'+PORT));

module.exports = app;