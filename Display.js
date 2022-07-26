class Display {
  constructor( displayValorAnterior,displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculadora = new Calculadora();
    this.tipoDeoperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar : '+',
      restar : '-',
      multiplicar : '*',
      dividir : '/',
    }
  }
  borrar(){
      this.valorActual = this.valorActual.slice(0,-1);
      this.imprimirNumeros();
  }
  borrarTodo(){
      this.valorActual = '';
      this.valorAnterior = '';
      this.tipoDeoperacion = undefined;
      this.imprimirNumeros();

  }

  agregarNumeros(numeros) {
      if (numeros === ',' && this.valorActual.includes(',')) return 
          
      
    this.valorActual = this.valorActual.toString() + numeros.toString();
    this.imprimirNumeros();
  }

  computar(tipo){
  this.tipoDeoperacion !== 'igual' && this.calcular();
  this.tipoDeoperacion = tipo;
  this.valorAnterior = this.valorActual || this.valorAnterior;
  this.valorActual = '';
  this.imprimirNumeros();
  }
  
  imprimirNumeros() {
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoDeoperacion] || ""}` ;
    this.displayValorActual.textContent = this.valorActual ;
  }
  calcular(){

    const valorAnterior =parseFloat (this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if(isNaN(valorAnterior)|| isNaN(valorActual) ) return
    this.valorActual = this.calculadora[this.tipoDeoperacion](valorAnterior,valorActual);
  }
}
