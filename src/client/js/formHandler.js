function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
   // fetch('http://localhost:8081/test')

   const baseURL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=';
   const key = '&appid=8b44aa9e42a55dba93a6118d79cd1470';

    fetch(baseURL+formText+key)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.main.temp;
    })
}

export { handleSubmit }
