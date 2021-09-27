const express = require('express')
const cors = require('cors')

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