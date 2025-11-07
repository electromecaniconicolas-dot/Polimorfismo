
class Figura {
  constructor(color) {
    this.color = color;
  }

  area() {
    return 0; 
  }
}
class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  area() {
    return this.base * this.altura;
  }
}
class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
}


const rectangulo1 = new Rectangulo("rojo", 10, 5);
const circulo1 = new Circulo("azul", 7);

console.log(`Área del rectángulo (${rectangulo1.color}): ${rectangulo1.area()}`);
console.log(`Área del círculo (${circulo1.color}): ${circulo1.area().toFixed(2)}`);