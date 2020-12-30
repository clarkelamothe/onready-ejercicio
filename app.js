datosDeLaConcesionaria = [
    {
        marca: "Peugeot",
        modelo: "206",
        puertas: "4",
        precio: "200000"
    },
    {
        marca: "Honda",
        modelo: "Titan",
        cilindrada: "125cc",
        precio: "60000"
    },
    {
        marca: "Peugeot",
        modelo: "208",
        puertas: "5",
        precio: "250000"
    },
    {
        marca: "Yamaha",
        modelo: "YBR",
        cilindrada: "160cc",
        precio: "80500,50"
    },
]

class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }
}
class Auto extends Vehiculo {
    constructor(marca, modelo, puertas, precio) {
        super(marca, modelo, precio)
        this.puertas = puertas
        this.cilindrada = null
    }
}
class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
        super(marca, modelo, precio)
        this.cilindrada = cilindrada
        this.puertas = null
    }
}

vehiculos = [];
datosDeLaConcesionaria.forEach(dato => {
    if (dato.cilindrada == undefined) {
        vehiculos.push(new Auto(dato.marca, dato.modelo, dato.puertas, dato.precio))
    } else {
        vehiculos.push(new Moto(dato.marca, dato.modelo, dato.cilindrada, dato.precio))
    }
});

//Mostrar los datos de la concesionaria
vehiculos.forEach(vehiculo => {
    if (vehiculo.cilindrada == null) {
        console.log(
            `Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Puertas: ${vehiculo.puertas} // Precio: ${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(parseFloat(vehiculo.precio))}`
        );
    } else {
        console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Cilindrada: ${vehiculo.cilindrada} // Precio: ${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(parseFloat(vehiculo.precio))}`);
    }
})

console.log('=============================');


const listaPrecios = vehiculos.map(vehiculo => parseFloat(vehiculo.precio))
const indexMasCaro = listaPrecios.indexOf(Math.max.apply(Math, listaPrecios)) //ver index del mas carro en array vehiculos
console.log(`Vehículo más caro: ${vehiculos[indexMasCaro].marca} ${vehiculos[indexMasCaro].modelo}`);

const indexMasBarrato = listaPrecios.indexOf(Math.min.apply(Math, listaPrecios)) //ver index del mas barrato en array vehiculos
console.log(`Vehículo más barato: ${vehiculos[indexMasBarrato].marca} ${vehiculos[indexMasBarrato].modelo}`);

const listaModelos = vehiculos.map(vehiculo => vehiculo.modelo)
let indexModeloConY = -1;
listaModelos.forEach((modelo, index) => {
    if (modelo.includes('Y')) {
        indexModeloConY = index
    }
})
console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculos[indexModeloConY].marca} ${vehiculos[indexModeloConY].modelo} ${vehiculos[indexModeloConY].precio}`);

console.log('=============================');

vehiculos.sort((a, b) => (parseFloat(a.precio) > parseFloat(b.precio)) ? 1 : -1)
vehiculos.forEach(vehiculo => {
    console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
})

