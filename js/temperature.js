const API_KEY = `f3f2dc6bc05feb18697a1a5c433c3366`

const temperatureCity = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch (url)
    .then(response => response.json())
    .then(data => displayTemp(data))
}

const displayTemp = data =>{
    console.log(data)
    searchConditionById('temperature-field', data.main.temp)
    searchConditionById('condition', data.weather[0].main )
    
}
const searchConditionById = (id, text) =>{
    const loadTemp = document.getElementById(id)  
    loadTemp.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field')
    const city = searchField.value;
// set city name
    document.getElementById('city-text').innerText = city;
    temperatureCity(city)
})
temperatureCity('dhaka')