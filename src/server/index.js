const express = require('express')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv')

const getWeather = require('./helpers/getWeather')

// Allow to retrieve data from .env file
dotenv.config()

// Create an express application
const app = express()

//  serve images, CSS files, and JavaScript files in a directory named dist
app.use(express.static('dist'))

// enable the express server to respond to preflight requests.
// CORS are basically a set of headers sent by the server to the browser
app.use(cors())

// recognize the incoming Request Object as a JSON Object. 
app.use(express.json())
// recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile('dist/index.html')
})

const PORT = process.env.PORT || 8081
const HOSTNAME = process.env.HOST || 'localhost'
app.listen(PORT, function () {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}!`)
})


app.get('/test', function (req, res) {
  res.send('Hello World')
})

const app_data = {}

app.post('/api', async (req, res) => {
  try {
    const city = req.body.city
    const citylat = req.body.citylat
    const citylng = req.body.citylng
    const date = req.body.date

    // const getGeonamesResponse = await getGeonames(city)

    //fetching weatherBit api
    const getweatherResponse = await getweather(citylat, citylng)

    //fetching Pixabay api
    const getPixabayResponse = await getPixabay(city)

    app_data.location = city
    app_data.max_temp = getweatherResponse.max_temp
    app_data.min_temp = getweatherResponse.min_temp
    app_data.image = getPixabayResponse.webformatURL
    app_data.numberOfDays = getNumberOfDays(date)

    res.send(app_data)
  } catch (error) {
    console.log(error);
  }
  
})

// const getGeonames = async (city) => {
//   const username = process.env.USER_NAME
//   return await axios({
//       url: `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${username}`})
//       // DO NOT CONVERT to JSON as data is formatted as JSON
//     .then(data => data.data.geonames[0])
//     .catch((err) => console.log(err))
// }

// const getweather = async (lat, lng) => {
//   const weatherbit_api = process.env.WEATHERBIT_API
//   return await axios({
//     url: `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbit_api}`})
//     // .then(res => {
//     //   console.log(res);
//     //   // const weatherIcon = `https://www.weatherbit.io/static/img/icons/${icon}.png`
//     //   return res.data[0]
//     // })
//     .then(data => data.data.data[0])
//     .catch(err => console.log(err))
// }

// const getPixabay = async (city) => {
//   const pixabay_api = process.env.PIXABAY_API
//   return await axios({
//     url: `https://pixabay.com/api/?key=${pixabay_api}&q=${city}&image_type=photo&orientation=horizontal&safesearch=true&category=places`
//   })
//     .then(data => data.data.hits[0])   
//     .catch(err => console.log(err))
// }

// const getNumberOfDays = (date) => {
//   const currentDate = new Date(Date.now())
//   const departDate = new Date(date);

//   // One day in milliseconds
//   const oneDay = 1000 * 60 * 60 * 24;

//   // Calculating the time difference between two dates
//   const diffInTime = departDate.getTime() - currentDate.getTime();

//   // Calculating the no. of days between two dates
//   const diffInDays = Math.round(diffInTime / oneDay);

//   return diffInDays;
// }