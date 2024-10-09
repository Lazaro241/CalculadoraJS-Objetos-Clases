import {Menu} from "./modules/menu.js";
import {Calculadora} from "./modules/calculadora.js";

//main
let menu = new Menu();
let calculadora = new Calculadora();
do {
  menu.mostrarMenu();
  menu.pedirEleccion();
  switch (menu.getEleccion()) {
    case 1:
    case 2:
    case 3:
    case 4:
      calculadora.setOperandos(menu.pedirNumeros());
      if (calculadora.getOperandos !== null) {
        switch (menu.getEleccion()) {
          case 1:
            calculadora.sumar();
            break;
          case 2:
            calculadora.restar();
            break;
          case 3:
            calculadora.multiplicar();
            break;
          case 4:
            calculadora.dividir();
            break;
        }
        if(calculadora.getResultado()!==null){
          console.log("El resultado de la operacion es: ", calculadora.getResultado());
        }
      }
      break;
    case 5:
      console.log("Cerrando...");
      break;
    default:
      console.error("Opción no válida");
      break;
  }
} while (menu.getEleccion() !== 5);
