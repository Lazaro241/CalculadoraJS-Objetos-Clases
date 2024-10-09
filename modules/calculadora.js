class Calculadora{
    constructor() {
        this.resultado = 0;
        this.operandos = null;
    }
    setOperandos(op){
        this.operandos = op;
    }
    getOperandos(){
        return this.operandos;
    }
    getResultado(){
        return this.resultado;
    }
    sumar(){
        this.resultado=this.operandos.reduce((acc, num) => acc + num, 0);
    }
    restar(){
        this.resultado=this.operandos.reduce((acc, num) => acc - num);
    }
    multiplicar(){
        this.resultado=this.operandos.reduce((acc, num) => acc * num, 1);
    }
    dividir(){
        if (this.divisionCero(this.operandos)) {
            this.resultado = null;
            return;
        }
        this.resultado=this.operandos.reduce((acc, num) => acc / num);
    }
    divisionCero(){
        if(this.operandos.slice(1).some(num => num === 0)){
            console.error("Error: No se puede dividir por cero.");
            return true;
        }
    }
}





export {Calculadora};