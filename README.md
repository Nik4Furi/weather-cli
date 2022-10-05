
# weather-cli ❄️
A command base app, to use to find the city temperature, when you enter the city name with command. 
`node command w <enter cityname>`




## Demo 🪧




## Tech Stack ⚙️

**Server:** Node



## Dependies Managments 👨‍💼

- commander : ^9.4.1    //for use to convert into command line interface
- dotenv : ^16.0.3       //For measuring / hidding our secret key or 
- requests : ^0.3.0     //For fetch the api requests
## API Reference 🔃

We are use the [open-weather](https://openweathermap.org/api) to getting the api, to get the info of temperature city wise.

### To Fetch the data with the help of api

```http
 url = https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `API_KEY`    | `string` | **Required**. API_KEY is used to fetch the data from openweather.



## Run Locally 🏃‍♂️

Clone the project

```bash
  git clone https://github.com/Nik4Furi/weather-cli
```

Go to the project directory

```bash
  cd weather-cli
```

Install dependencies

```bash
  npm install
```

To get the idea to start the server

```bash
  node command --version   
  node command w <enter cityname>
```


## Environment Variables 

To run this project, you will need to add the following environment variables to your .env file and also you can `.env.example` file

`API_KEY`

## Optimizations 📀

No Optimizations yet, I did! 


# Article For-- How can use it 🎭

### Install the app 
* First of all clone or download the app from the github

### Install Dependies
* Install all the Dependies using `npm Install`

### After All Installation
* you can write on the terminal `node command w <cityname>`
OR 
#### also can use these method

* Open terminal and write `npm link`
* Open other terminal and write `node command --version`
* After enter both command and You did not get any error then can enter on the any terminal / bash for running the app , because after your link using `npm link` then write the command every where or on others terminal. 