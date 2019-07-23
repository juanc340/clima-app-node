//require
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion
/*
lugar.getLugar(argv.direccion).then(resp => {
    console.log(resp)
});*/

/*
clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);
*/

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugar(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lon);


        return `la temperatura de ${coordenadas.direc} es de ${temperatura}`;

    } catch (error) {
        return `No se pudo determinar el clima ${direccion}`;

    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);