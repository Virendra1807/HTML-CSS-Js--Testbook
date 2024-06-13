const apiKey = "38010ab07b5c2002cbd7bfe1f94a6b46";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";


const search = document.querySelector(".search input");
const btn  = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWhether(cityName){
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${cityName}` )
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Kmph";

    // Logic to change the images according to weather
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "WeatherAppImg/images/clouds.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "WeatherAppImg/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "WeatherAppImg/images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "WeatherAppImg/images/snow.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "WeatherAppImg/images/rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "WeatherAppImg/images/clear.png";
    }
    else{
        weatherIcon.src = "WeatherAppImg/images/clear.png";
    }

    // reset input box 
    search.value = "";
}

btn.addEventListener('click', (e)=>{
    if(search.value != ""){
    // alert(search.value)
    checkWhether(search.value);
    }
});

window.addEventListener('keyup', (e)=>{
    if(e.key == "Enter" & search.value != ""){
    // alert('Viren');
    checkWhether(search.value);

    }
    
})