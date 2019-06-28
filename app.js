const argv = require('yargs').options({
    descripcion: {
        alias: 'd',
        descripcion: "Ciudad a la que se quiere obtener el clima",
        demmand: true,
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*lugar.getLatLong(argv.descripcion)
    .then(result => console.log(result))
    .catch(err => console.log(err));*/


/*clima.getClima(8.660000, -75.919998)
    .then(console.log)
    .catch(console.log);*/


const getInfo = async(direccion) => {
    try {
        const latlng = await lugar.getLatLong(direccion);
        const temp = await clima.getClima(latlng.lat, latlng.lng);
        return `El clima de la ciudad de ${direccion} es ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion} ${e} `;
    }
}


getInfo(argv.descripcion).then(console.log).catch(console.log);