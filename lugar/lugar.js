const axios = require('axios');


const getLatLong = async(dir) => {

    const searchURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ searchURL}`,
        headers: { 'X-RapidAPI-Key': 'fa52dcdccdmsha1c83a524893d81p103813jsn6d26eb8c275b' }
    });

    const resp = await instance.get();


    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontró una direccion para el siguiente parametro ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng,
    }

}


module.exports = {
    getLatLong,
}