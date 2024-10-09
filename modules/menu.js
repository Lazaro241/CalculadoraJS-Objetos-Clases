import promptSync from 'prompt-sync';
const a=promptSync();
class Menu{
    constructor(){
        this.eleccion=null;
    }
    mostrarMenu(){
        console.log("Selecciona la operacion a realizar");
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("5. Salir");
    }
    pedirEleccion(){
        this.eleccion=parseInt(a("Opcion: "), 10);
    }
    getEleccion(){
        return this.eleccion;
    }
    pedirNumeros(){
        let input = (a("Ingrese los numeros de la operacion, separados por coma: "));
        let nums = input.split(",");
        let validos = true;
        for(let i = 0; i<nums.length; i++){
            let num = parseFloat(nums[i].trim());
            if(isNaN(num)){
                validos = false;
                break;
            }
            nums[i] = num;
        }
        if(!validos){
            console.error("Error: Ingrese solo numeros.");
            return null;
        }
        return nums;
    }

}


export {Menu}
