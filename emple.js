const prompt = require('prompt-sync')();

class Empleado {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }   

}
const empleado1 = new Empleado('Juan Perez', 30, 50000);

const gerente = class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonoGerente) {
        super(nombre, edad, salarioBase);
        this.bonoGerente = bonoGerente;
    }}
const gerente1 = new gerente('Ana Gomez', 40, 80000, 15000);

const desarrollador = class Desarrollador extends Empleado {
    constructor(nombre, edad, salarioBase, lenguajeProgramacion) {
        super(nombre, edad, salarioBase);
        this.lenguajeProgramacion = lenguajeProgramacion;
    }
}
const desarrollador1 = new desarrollador('Luis Martinez', 28, 60000, 'JavaScript');
let intento = 0; 
while (true){
  const menu = prompt('que buscas: 1. calcular salario 2. buscar empleado 3. salir ');
   if (intento < 3) {
      intento++;
    }
    else if (intento == 3) {
    console.log('Has excedido el número de intentos. Saliendo del programa...');
    break;
   
  } 

  

if (menu == '1') {
    let input1 = prompt('Ingrese el nombre del empleado: ');

    switch (input1.toLowerCase()) {
        case 'juan perez':
            console.log(`Salario de ${empleado1.nombre}: $${empleado1.salarioBase}`);   
            break;
        case 'ana gomez':
            const salarioGerente = gerente1.salarioBase + gerente1.bonoGerente;
            console.log(`Salario de ${gerente1.nombre}: $${salarioGerente}`);
            break;
        case 'luis martinez':
            console.log(`Salario de ${desarrollador1.nombre}: $${desarrollador1.salarioBase}`);
            break;
        default:
            console.log('Empleado no encontrado');
            break;
    }
    
}
letinput2 = prompt('Ingrese a quien buscar: ');
switch (input2.toLowerCase()) {
    case 'juan perez':
        console.log(`Empleado: ${empleado1.nombre}, Edad: ${empleado1.edad}`);
    default:
        console.log('Empleado no encontrado');
        break;
    case 'ana gomez':
        console.log(`Gerente: ${gerente1.nombre}, Edad: ${gerente1.edad}`);
        break;
    case 'luis martinez':
        console.log(`Desarrollador: ${desarrollador1.nombre}, Edad: ${desarrollador1.edad}`);
        break;
        return menu ;

}
if (menu == '3') {
    console.log('Saliendo del programa...');
}

}
    