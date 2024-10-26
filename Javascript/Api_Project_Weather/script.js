const cityInput = document.getElementById("city-input");
const getWeatherBtn = document.getElementById("getWeather-btn");
const result = document.getElementById("result");
const cityName = document.getElementById("cityName");
const country = document.getElementById("country");
const time = document.getElementById("time");
const temperature = document.getElementById("temperature");
const apiKey = "ed5daf1fcf9a4c8c9a7174705241910";

const getData = async () => {
    const api=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput.value}&aqi=no`;
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);

        // Update DOM elements with the fetched data
        cityName.textContent = data.location.name;
        country.textContent = data.location.country;
        time.textContent = data.location.localtime;
        temperature.textContent = `${data.current.temp_c}°C`;

        // Make the result visible
        result.style.display = 'block';
    } catch (error) {
        console.error("Error fetching weather data:", error);
        result.textContent = "An error occurred while fetching weather data. Please try again.";
        result.style.display = 'block';
    }
}

getWeatherBtn.addEventListener("click", () => {
    console.log(cityInput.value);
    getData();
});

// Initially hide the result
result.style.display = 'none';
