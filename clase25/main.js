import config from "./config.js";
import express from "express";
import { fork } from "child_process";

console.log(config.port);
console.log(config.mongoUrl);
console.log(config.user);
console.log(config.password);

const app = express();
app.listen(config.port, () => {
  console.log(`Server on port ${config.port}`);
});

app.get("/suma", (req, res) => {
  const child1 = fork("./calculoMatematico.js"); //Calcular y generar la cantidad de hilo de ejecucion
  console.log(process.pid);
  child1.send("Labura"); //Enviar un mensaje para ejecutar este archivo
  child1.on("message", (resultado) => {
    res.send(`El resultado final es: ${resultado}`);
  });
});

app.get("/sumaSinHijos", (req, res) => {
  let resultado = 0;
  for (let i = 0; i < 5e9; i++) {
    resultado += i;
  }

  res.send(`El resultado es ${resultado}`);
});
app.get("/hola", (req, res) => {
  res.send(`El resultado es `);
});
