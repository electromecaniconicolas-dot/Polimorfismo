
class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }

  descripcion() {
    return `Producto: ${this.nombre} | Marca: ${this.marca} | Precio: $${this.precio}`;
  }
}

class Telefono extends Producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca);
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }

  descripcion() {
    return `${super.descripcion()} | Almacenamiento: ${this.almacenamiento}GB | RAM: ${this.ram}GB`;
  }
}

class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }

  descripcion() {
    return `${super.descripcion()} | Procesador: ${this.procesador} | Pantalla: ${this.pulgadas}"`;
  }
}

const telefono1 = new Telefono("Galaxy S24", 1200, "Samsung", 256, 12);
const laptop1 = new Laptop("MacBook Air", 1500, "Apple", "M2", 13.6);

console.log(telefono1.descripcion());
console.log(laptop1.descripcion());