function handleSubmit(event) {
  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  event.preventDefault()
  let input = document.getElementById('autocomplete').value
  let city = document.getElementById('city').value
  let citylat = document.getElementById('Lat').value
  let citylng = document.getElementById('Lng').value
  let date = document.getElementById('date').value

  if (input == '' || date == '') {
    return alert('Please enter your city and date')
  }

  // console.log("::: Form Submitted :::")

  let url = 'http://localhost:8081/api'
  if (process.env.NODE_ENV === "production") {
    url = '/api'
  }

  fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      city,
      citylat,
      citylng,
      date
    })
  })
    .then(res => res.json())
    .then(function (res) {
      Client.dataRender(res)
    })
    .catch(e => {
      console.log('Error of fetching data', e);
    })
}

export {handleSubmit}