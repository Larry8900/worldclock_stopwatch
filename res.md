<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch Timer</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="/styles.css">

</head>
<body class="container bg-primary ">
    <section class="col-12 main">
        <article class="col-6 col-sm-6 col-md-6 col-lg-6 first-div">
            <h1 class="text col-2 col-sm-2 col-md-6 col-lg-6">Stopwatch Timer</h1>
        <div class="show-time col-2 col-sm-2 col-md-6 col-lg-6">
            <h3 class="text "><span id="hour">00</span>: <span id="minutes">00</span>: <span id="seconds">00</span></h3>
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-12 btn-group ">
            <button class="col-4 col-sm-4 col-md-6 col-lg-6 rounded-pill btn-outline-info bg-info text-light" id="start">Start</button>
            <button class="col-4 rounded-pill btn-outline-info bg-info text-light" id="lap">Lap</button>
            <button class="col-4 rounded-pill btn-outline-info bg-info text-light" id="pause">Pause</button>
            <button class="col-4 rounded-pill btn-outline-info bg-info text-light" id="reset">Reset</button>

        </div>
        <h3 class="text-light">Lap Timer</h3>
        <div id="lap-div">
             <ul id="laplist"></ul>
        </div>
        </article>
        <article class="col-6 second-div">
            <h1 class="text">World Clock</h1>
            <h5>Current City: <span id="current-city"></span></h5>
            <input type="search" id="country-input"> <button id="country-search">search</button>
            
<img src="http://www.geognos.com/api/en/countries/flag/CA.png" id="flag">
            <div class="search col-12" >
                <input type="search" placeholder="Enter city" class="search col-10" id="search"> 
                <button id="search-btn" class="search-btn">Search</button>
            </div>
            <div class="time-display">       
                <h5>Continent & City: <span id="city"></span></h5>
                <h5>Current Date & Time: <span id="time"></span></h5>
                
            </div>


        </article>
        
        
       
    </section>


<script src="/index.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</body>
</html>