import Vehiculo from './Vehiculo.js';

export default class Auto extends Vehiculo {
    constructor(marca, modelo, puertas, precio) {
        super(marca, modelo, precio)
        this.puertas = puertas;
    }

    mostrar(marca, modelo, puertas, precio) {
        console.log(
            `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(parseFloat(this.precio))}`
        );
    }
}