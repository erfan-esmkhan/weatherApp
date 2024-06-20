const inputElem = document.querySelector('input')

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '0a7d23c758269e196d08e128aaa9bfd9'
}

function fetchData () {
    let countryValue = inputElem.value

    fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`).
        then(res => res.json())
        .then(data => {
            console.log(data);

            showData(data)
        })
}

function showData (data) {
    let cityElem = document.querySelector('.city')
    cityElem.innerHTML = `${data.name}, ${data.sys.country}`

    let dateElem = document.querySelector('.date')
    dateElem.innerHTML = showDate()

    let tempElem = document.querySelector('.temp')
    tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`

    let weatherElem = document.querySelector('.weather')
    weatherElem.innerHTML = `${data.weather[0].main}`

    let tempsElem = document.querySelector('.hi-low')
    tempsElem.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`
}

function showDate () {


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    
    return `${day} ${date} ${month} ${year}`

}

inputElem.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        fetchData()
    }
})

