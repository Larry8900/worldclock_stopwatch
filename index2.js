
// get elements from the HTML DOM
// header
let userTime = document.getElementById('user-time');
let userLocation = document.getElementById('user-location');
let userDate = document.getElementById('user-date')

// search
let userInput = document.getElementById('user-input');

let searchButton = document.getElementById('search-btn');

// country cards using jquery methods
// since the country name and flag will be constant i'll be selecting the time and weather only

let temp1 = document.getElementById('weather1')
let temp2 = document.getElementById('weather2')
let temp3 = document.getElementById('weather3')
let temp4 = document.getElementById('weather4')

searchButton.addEventListener('click',getTemp);


async function getTemp() {
    const city = userInput.value
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=e881d1cec5db41f4b88231239240103&q=${city}&aqi=no`
    const countryCodeUrl = `https://country-codes4.p.rapidapi.com/country-codes?name=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70cfdefaabmshc725a3f74bdafc3p1fad03jsn42865df74020',
            'X-RapidAPI-Host': 'country-codes4.p.rapidapi.com'
        }
    };

    console.log(city)
    try{
        const response = await fetch(weatherUrl)
        const weatherData = await response.json();


        const response2 = await fetch(countryCodeUrl, options);
        const countryCodeData = await response2.json();

        console.log(weatherData,countryCodeData);
        
        
        if(countryCodeData.length == 0){
            $('#search-image').attr('src', weatherData.current.condition.icon);
        }
        else {

            let alpha2Code = countryCodeData[0].alpha2Code;
             $('#search-image').attr('src', `http://www.geognos.com/api/en/countries/flag/${alpha2Code}.png`)
             console.log(alpha2Code)
        }
       
    }
   
    catch(error) {
        console.log(error)
    }

    
   
    
    // try {
    //     const response = await fetch(url2, options);
    //     const result = await response.json();
    //     if (result.length >0) {
    //         const alpha2CodeValue = result[0].alpha2Code; // saving the alpha2code into a variable
    //       // changing the image source attribute on DOM  with jQuery 
    //         $('img').attr('src', `http://www.geognos.com/api/en/countries/flag/${alpha2CodeValue}.png`);
    //         console.log(result)
    //     }

    // } catch (error) {
    //     console.error(error);
    // }



}