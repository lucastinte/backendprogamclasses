import { Command } from "commander"; //comander optimiza el manejo de argumentos
const program = new Command();
program
  .option("-d", "variable para debug", false) //argumentos
  .option("-p <port>", "Puerto de mi app", "4000") //seteo valores
  .option("--mode <mode>", "Modo de trabajo", "development") //seteo valores
  .requiredOption(
    "-u <user>",
    "usuario de la app",
    "Nose igreso ningun usuario"
  )
  .option("-w", "Ingrese palabras", " "); //argumentos
program.parse();
const opts = program.opts();
console.log(opts.mode);
console.log(program.args);
