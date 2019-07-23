const axios = require('axios');


const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d04d1df096d39e7888f3b4281b4185a`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}