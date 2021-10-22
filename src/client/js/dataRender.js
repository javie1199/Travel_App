const dataRender = (response) => {
    if (response.message == null) {
        weather.style.visibility = 'visible'
        message.style.visibility = 'hidden'
        temp.innerHTML = `${response.temp}<span>&#8451;</span>`
        localCity.innerHTML = response.location
        tripLength.innerHTML = `Great!!!! Your Trip is ${Client.dayCount(response.numberOfDays)} Your Destination's weather for now is here.`
        weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${response.icon}.png`
        card.style.backgroundImage = `url(${response.image})`
        dateTime.innerHTML = response.dateTime
        maxTemp.innerHTML = `Max Temp: ${response.maxTemp}<span>&#8451;</span>`
        lowTemp.innerHTML = `Min Temp: ${response.lowTemp}<span>&#8451;</span>`
        description.innerHTML = `Description: ${ response.description }`
        weather.scrollIntoView({ behavior: "smooth" })
    }
    else {
        weather.style.visibility = 'hidden'
        message.style.visibility = 'visible'
        message.scrollIntoView({ behavior: "smooth" })
        message.innerHTML = response.message
    }
};

export { dataRender }