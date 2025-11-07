
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    return "Sonido genérico de animal";
  }
}

// Clase hija: Perro
class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }

  emitirSonido() {
    return `${this.nombre} dice: ¡Guau guau! `;
  }
}

// Clase hija: Gato
class Gato extends Animal {
  constructor(nombre, edad, color) {
    super(nombre, edad);
    this.color = color;
  }

  emitirSonido() {
    return `${this.nombre} dice: ¡Miau miau! `;
  }
}

// Crear instancias
const perro1 = new Perro("Rex", 2, "Labrador");
const gato1 = new Gato("Mishi", 1, "Blanco");

// Mostrar sonidos
console.log(perro1.emitirSonido());
console.log(gato1.emitirSonido());