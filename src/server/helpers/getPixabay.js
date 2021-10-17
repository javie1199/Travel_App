const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()


const getPixabay = async (city) => {
  const pixabay_api = process.env.PIXABAY_API
  return await axios({
    url: `https://pixabay.com/api/?key=${pixabay_api}&q=${city}&image_type=photo&orientation=horizontal&safesearch=true&category=places`
  })
    .then(data => data.data.hits[0])
    .catch(err => console.log(err))
}


async function test() {
  const response = await getPixabay('Toronto')
  console.log(response);
}

// test()

module.exports = getPixabay