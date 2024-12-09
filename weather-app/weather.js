const apiKey = "1b5ddb563a1853dfee4dc54f06d661a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + ' %';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "/images.wether/cloud.img.png";
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "/images.wether/bright.img.png";
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "/images.wether/heavy-rain.img.png";
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "/images.wether/drizzle.img.png";
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "/images.wether/haze.img.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})

checkWeather();





