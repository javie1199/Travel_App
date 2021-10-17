const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()


const getweather = async (lat, lng) => {
  const weatherbit_api = process.env.WEATHERBIT_API
  return await axios({
    url: `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbit_api}`})
    // .then(res => {
    //   console.log(res);
    //   // const weatherIcon = `https://www.weatherbit.io/static/img/icons/${icon}.png`
    //   return res.data[0]
    // })
    .then(data => data.data.data[0])
    .catch(err => console.log(err))
}

async function test() {
  const response = await getweather(51.5, -0.13)
  console.log(response);
}

// test()

module.exports = getweather