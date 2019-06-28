const axios = require('axios');



const getClima = async(lat, lng) => {
    const appid = '784c609e062f5dcabcdd42604f4afc17'
    const units = 'metric'
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=${units}`)

    return resp.data.main.temp;
}


module.exports = {
    getClima,
}