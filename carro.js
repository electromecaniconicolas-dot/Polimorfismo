const prompt = require('prompt-sync')();

const vehiculosviejos = [
    { marca: "BMW", modelo: "X5", anio: 2005 },
    { marca: "Audi", modelo: "A4", anio: 2010 },
    { marca: "Ford", modelo: "Focus", anio: 2008 }
];

const vehiculosnuevos = [
    { marca: "Tesla", modelo: "Model 3", anio: 2022, puertas: 4 },
    { marca: "Toyota", modelo: "Corolla", anio: 2021, puertas: 4 },
    { marca: "Honda", modelo: "Civic", anio: 2023, puertas: 4 }
];

const input = prompt('Ingresa viejo o nuevo: ').toLowerCase();

if (input === 'nuevo') {
    console.log('\nVehículos nuevos');
    console.log('-----------------------------');
    vehiculosnuevos.forEach(v => console.log(`Marca: ${v.marca}, Modelo: ${v.modelo}, Año: ${v.anio}, Número de puertas: ${v.puertas}`));
    console.log(`\nTotal: ${vehiculosnuevos.length}`);
}
else if (input === 'viejo') {
    console.log('\nVehículos viejos');
    console.log('-----------------------------');
    vehiculosviejos.forEach(v => console.log(`Marca: ${v.marca}, Modelo: ${v.modelo}, Año: ${v.anio}`));
    console.log(`\nTotal: ${vehiculosviejos.length}`);
}
else {
    console.log('Por favor ingresa un valor válido (viejo/nuevo).');
}



