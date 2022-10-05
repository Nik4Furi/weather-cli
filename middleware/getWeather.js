// Using the packages 
const requests = require('requests');

const getWeather = async (city) => {
    // Declarations the .env variables 
    const api_key = process.env.API_KEY;

    //Decalrations the variables by the users
    const city_name = city;
    const units = "metric"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=${units}&appid=${api_key}`;


    // Geting the data using xhr requests 
    requests(url)
        .on('data', function (chunk) {
            // Check the given url is work or not 
            if (!chunk) {
                return console.log("Plz enter the valid fields")
            }

            let res = JSON.parse(chunk);
            console.log(`The temperatur of the ${city_name} is`, res.main.temp, '`C');
        })
        .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);
        });

}

// getWeather();
module.exports = getWeather;