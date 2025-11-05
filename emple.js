const prompt = require('prompt-sync')();

class Empleado {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }   

    