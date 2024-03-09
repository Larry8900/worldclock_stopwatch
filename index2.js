
// get elements from the HTML DOM
// header
let userTime = document.getElementById('user_time');
let userLocation = document.getElementById('user-location');
let userDate = document.getElementById('user_date')


// Date methhod
let date = new Date()
let hours = date.getHours().toString().padStart(2, '0')
let minutes = date.getMinutes().toString().padStart(2, '0')
let seconds = date.getSeconds().toString().padStart(2, '0')
userTime.textContent = `${hours}: ${minutes}: ${seconds}`
userDate.textContent = date.toDateString()

// to get the user's location 
userLocationCall()

async function userLocationCall(){
    const options = {method: 'GET'};
    const url = 'https://ipgeolocation.abstractapi.com/v1?api_key=1edc3bed50bd418181131985c368acb7'
      
    try{
        const response = await fetch (url);
        const data = await response.json()
        userLocation.textContent = data.country
        $('.country_flag').attr('src',data.flag.png )
        console.log(data)
    }
    catch(error) {
        console.log(error)
    }
    
}

// search input & button 
let userInput = document.getElementById('user-input');

let searchButton = document.getElementById('search-btn');

// country cards using jquery methods
// since the country name and flag will be constant i'll be selecting the time and weather only

searchButton.addEventListener('click',getTemp);

// weather Api returns a particular city/country weather details including timezone, date and temperature
// countryCode api is used to fetch a country is20 alpha code which is used to return the country flag

async function getTemp() {
    $('.search-display').css('display', 'flex')
    const city = userInput.value
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=e881d1cec5db41f4b88231239240103&q=${city}&aqi=no`
    const countryCodeUrl = `https://country-codes4.p.rapidapi.com/country-codes?name=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70cfdefaabmshc725a3f74bdafc3p1fad03jsn42865df74020',
            'X-RapidAPI-Host': 'country-codes4.p.rapidapi.com'
        }
    }
    console.log(city)
    try{
        const response = await fetch(weatherUrl)
        const weatherData = await response.json()


        const response2 = await fetch(countryCodeUrl, options)
        const countryCodeData = await response2.json()

        console.log(weatherData,countryCodeData)
        console.log()

        if(countryCodeData.length == 0){
            $('#search-image').attr('src', weatherData.current.condition.icon)
            $('#city').text(weatherData.location.name)
            $('#time').text(weatherData.location.localtime)
            $('#temp').text(weatherData.current.temp_c)
        }
        else {

            let countryIso2Code = countryCodeData[0].alpha2Code
             $('#search-image').attr('src', `https://flagsapi.com/${countryIso2Code}/shiny/64.png`)
             $('#city').text(countryCodeData[0].name)
             $('#time').text(weatherData.location.localtime)
             $('#temp').text(weatherData.current.temp_c)
             console.log(alpha2Code)
        }
       
    }
   
    catch(error) {
        console.log(error)
    }

}

// Preloaded Countries
let canada = document.getElementById('canada_time');
let france = document.getElementById('france_time')
let russia = document.getElementById('russia_time')
let australia = document.getElementById('australia_time')
let netherlands = document.getElementById('netherlands_time')


let australia_url = "http://api.weatherapi.com/v1/current.json?key=e881d1cec5db41f4b88231239240103&q=australia&aqi=yes"
let canada_url = "http://api.weatherapi.com/v1/current.json?key=e881d1cec5db41f4b88231239240103&q=canada&aqi=yes"
let france_url = "http://api.weatherapi.com/v1/current.json?key=e881d1cec5db41f4b88231239240103&q=france&aqi=yes"
let netherlands_url = "http://api.weatherapi.com/v1/current.json?key=e881d1cec5db41f4b88231239240103&q=netherlands&aqi=yes"
let russia_url = "http://api.weatherapi.com/v1/current.json?key=e881d1cec5db41f4b88231239240103&q=russia&aqi=yes"

try {
    const australia = await fetch(australia_url)
    const weatherData = await response.json()
}
