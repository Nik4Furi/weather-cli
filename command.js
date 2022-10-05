require('dotenv').config();
const { program } = require('commander');

//Import or required files or folders
const getWeather = require('./middleware/getWeather');

//Introduction of the cli app
program
        .version('1.0.0')
        .name("weather-cli")
        .description("Its a weather app,which is based on the clients")

//Calling the function to getting the weather temp of given/enter city
program
        .command('weather <city>')
        .alias('w')
        .description("Enter city and get the temp")
        .action((city) => { getWeather(city) })

if (!program.parse(process.argv)) {
        console.log("plz enter the valid command or city name as 'node command weather <cityname>'")
}

program.parse(process.argv);

