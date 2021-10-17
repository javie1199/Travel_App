const max_temp = document.getElementById('max_temp');
const min_temp = document.getElementById('min_temp');
const location = document.getElementById('location');
const image = document.getElementById('image');
const numberOfDays = document.getElementById('numberOfDays')

const dataRender = (response) => {
    max_temp.innerHTML = response.max_temp
    min_temp.innerHTML = response.min_temp
    location.innerHTML = response.location
    image.src = response.image
    numberOfDays.innerHTML = response.numberOfDays
    // image.innerHTML = response.image
};

export { dataRender }