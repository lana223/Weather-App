const apikey = "e3957ccd084a4831948796866ed248b4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let City = document.querySelector(".city")
let Temp = document.querySelector(".temp")
let wind = document.querySelector(".wind")
let Humidity = document.querySelector(".Humidity")
let weathericon = document.querySelector(".weather-icon")
const searchBtn = document.querySelector(".search button ")
const Erroemsg = document.querySelector(".error")
const Weather = document.querySelector(".weather")
const searchInput = document.querySelector(".search input ")
async function checkweather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        Erroemsg.style.display = "block";
        Weather.style.display = "none"
    }
    else {
        let data = await response.json();
        Weather.style.display = "block"
        Erroemsg.style.display = "none";
        console.log(data)
        City.innerHTML = data.name;
        Temp.innerHTML = Math.round(data.main.temp) + "°C";
        wind.innerHTML = data.wind.speed + "km/h";
        Humidity.innerHTML = data.main.humidity + "%";


        if (data.weather[0].main == "Clear") {
            weathericon.src = "./images/clear.png"
        }
        else if (data.weather[0].main == "Clouds") {

            weathericon.src = "./images/clouds.png"
        }
        else if (data.weather[0].main == "Rain") {

            weathericon.src = "./images/rain.png"
        }

        else if (data.weather[0].main == "Snow") {

            weathericon.src = "./images/snow.png"
        }

        else if (data.weather[0].main == "Wind") {

            weathericon.src = "./images/wind.png"
        }
        else if (data.weather[0].main == "Drizzle") {

            weathericon.src = "./images/drizzle.png"
        }
    }


}
;

searchBtn.addEventListener('click', () => {

    checkweather(searchInput.value);


})




