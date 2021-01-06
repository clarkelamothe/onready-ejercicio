import Vehiculo from './Vehiculo.js';

export default class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
        super(marca, modelo, precio)
        this.cilindrada = cilindrada;
    }
    mostrar() {
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: ${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(parseFloat(this.precio))}`);
    }
}