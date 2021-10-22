// const temp = document.getElementById('temp');
// const localCity = document.getElementById('localCity');
// const weatherIcon = document.getElementById('weatherIcon')
// const card = document.getElementById('card');
// const numberOfDays = document.getElementById('tripLength')
// const dateTime = document.getElementById('dateTime')
// const maxTemp = document.getElementById('maxTemp')
// const minTemp = document.getElementById('minTemp')
// const description = document.getElementById('description')


const dataRender = (response) => {
    temp.innerHTML = `${response.temp}<span>&#8451;</span>`
    localCity.innerHTML = response.location
    tripLength.innerHTML = `Your Trip is ${Client.dayCount(response.numberOfDays)} Your Destination's weather for now is here.`
    weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${response.icon}.png`
    card.style.backgroundImage = `url(${response.image})`
    dateTime.innerHTML = response.dateTime
    maxTemp.innerHTML = `Max Temp: ${response.maxTemp}<span>&#8451;</span>`
    lowTemp.innerHTML = `Min Temp: ${response.lowTemp}<span>&#8451;</span>`
    description.innerHTML = `Description: ${ response.description }`
    weather.style.visibility = 'visible'
    weather.scrollIntoView({ behavior: "smooth" })
};

export { dataRender }