// saving elements from DOM as a variable 
let minutesLabel = document.getElementById('hour');
let secondsLabel = document.getElementById('minutes');
let milliSecondsLabel = document.getElementById('seconds');
let lapLabel = document.getElementById('laplist');
let search = document.getElementById('search');
let searchButton = document.getElementById('search-btn');
let cityLabel = document.getElementById('city')
let  currentTime = document.getElementById('time');
let currentcity = document.getElementById('current-city');


let countryInput = document.getElementById('country-input');
let countrySearch = document.getElementById('country-search')
countrySearch.addEventListener('click', getCountry);
   
// select buttons
let start = document.getElementById('start');
let lap = document.getElementById('lap');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let minutes = 0;
let seconds = 0;
let milliseconds = 0
let startLap = 0
let interval;


// Functions 
async function getCountry() {
    // using fetch api to generate input country alpha 2 code 
    // such as NG for Nigeria, UK for United Kingdom..
    let country = countryInput.value;
    const url = `https://country-codes4.p.rapidapi.com/country-codes?name=${country}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70cfdefaabmshc725a3f74bdafc3p1fad03jsn42865df74020',
            'X-RapidAPI-Host': 'country-codes4.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.length >0) {
            const alpha2CodeValue = result[0].alpha2Code; // saving the alpha2code into a variable
          // changing the image source attribute on DOM  with jQuery 
            $('img').attr('src', `http://www.geognos.com/api/en/countries/flag/${alpha2CodeValue}.png`);
            console.log(result)
        }

    } catch (error) {
        console.error(error);
    }

}


async function searchCurrentTime() {
    let city = search.value;
   
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/worldtime?city=' + city,
        headers: { 'X-Api-Key': 'cWrzPJrCNVMT/iTAKmI2pg==UMBkdVf3A6aHAkBm'},
        contentType: 'application/json',
        success: function(result) {
            cityLabel.innerText = result.timezone;
            currentTime.innerText = `${result.day_of_week}, ${result.day} ${result.month}, ${result.year} `
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}
// get user current city location

let broswerLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;
currentcity.innerText = broswerLocation;
  
searchButton.addEventListener('click',searchCurrentTime)
function displayTimer(){
    milliSecondsLabel.textContent = milliseconds;
    secondsLabel.textContent = seconds;
    minutesLabel.textContent = minutes;
}
function updateTimer(){
    milliseconds += 1 ;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes += 1;
        }
    }
    displayTimer()
}

function startTimer(){
    start.disabled = true
    pause.disabled = false;
    interval = setInterval( updateTimer, 10);
}
function pauseTimer(){
    pause.disabled = true;
    start.disabled = false
    clearInterval(interval);
    displayTimer()    
}
 
function resetTimer(){
    start.disabled = false;
    pause.disabled = false;
    lap.disabled = false;
    clearInterval(interval);
    seconds = 0;
    milliseconds = 0;
    displayTimer()
}

function lapTimer(){
    startLap ++
    let lapper = `Lap ${startLap}: ${seconds}: ${milliseconds}`
   document.getElementById('lap-div').after(lapper)

    displayTimer()
}


reset.addEventListener('click',resetTimer);
start.addEventListener('click',startTimer);
lap.addEventListener('click',lapTimer);
pause.addEventListener('click',pauseTimer)





