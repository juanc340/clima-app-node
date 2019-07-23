const axios = require('axios');


const getLugar = async(direccion) => {


    const encodeUrul = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrul}`,
        headers: { 'X-RapidAPI-Key': 'b35e0df8a6msh639a33c4b178d82p11203ajsn43620f73ef42' }

    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`no hay resultado para ${direccion}`);
    }
    const data = respuesta.data.Results[0];
    const direc = data.name;
    const lat = data.lat;
    const lon = data.lon;


    return {
        direc,
        lat,
        lon
    }


}

module.exports = {
    getLugar
}