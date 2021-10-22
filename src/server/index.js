const express = require('express')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv')

const getWeather = require('./helpers/getWeather')
const getPixabay = require('./helpers/getPixabay')
const getNumberOfDays = require('./helpers/dateCalculate')

var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');

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


app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());

app.get('/flash', function(req, res){
  req.flash('Error', 'Please enter a valid city');
  // res.render('dist/index.html')
});

app.get('/', (req, res) => {
  res.sendFile('dist/index.html')
})

const PORT = process.env.PORT || 8081
const HOSTNAME = process.env.HOST || 'localhost'
app.listen(PORT, function () {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}!`)
})


app.get('/test', function (req, res) {
  // res.send('Hello World')
  res.send(JSON.stringify(req.flash('test')));
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
    const getweatherResponse = await getWeather(citylat, citylng)

    //fetching Pixabay api
    const getPixabayResponse = await getPixabay(city)

    app_data.location = city
    app_data.temp = getweatherResponse.temp
    app_data.image = getPixabayResponse.webformatURL
    app_data.dateTime = getweatherResponse.datetime
    app_data.icon = getweatherResponse.weather.icon
    app_data.numberOfDays = getNumberOfDays(date)
    app_data.maxTemp = getweatherResponse.max_temp
    app_data.lowTemp = getweatherResponse.low_temp
    app_data.description = getweatherResponse.weather.description
    // app_data.message = ''

    
    console.log(citylat);
    console.log(citylng);
    console.log(getweatherResponse.weather.icon);
  
    res.send(app_data)
  } catch (error) {
    console.log(error);
    res.json({message: 'Please enter a valid city'})
  }
  
})

