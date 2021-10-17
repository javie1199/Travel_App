const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const getGeonames = async (city) => {
  const username = process.env.USER_NAME
  return await axios({
      url: `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${username}`})
      // DO NOT CONVERT to JSON as data is formatted as JSON
    .then(data => data.data.geonames[0])
    .catch((err) => console.log(err))
}

async function test() {
  const response = await getGeonames('london')
  console.log(response);
}

// test()

module.exports = getGeonames