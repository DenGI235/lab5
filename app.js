const apiKey = '56891e82beac8b1f1b3e19d409c889be';
const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherDataDiv = document.getElementById('weatherData');

getWeatherBtn.addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { main, wind } = data;
            const temperature = `Temperature: ${main.temp - 273.15}°C`;
            const humidity = `Humidity: ${main.humidity}%`;
            const windSpeed = `Wind Speed: ${wind.speed} m/s`;

            weatherDataDiv.innerHTML = `
                <p>${temperature}</p>
                <p>${humidity}</p>
                <p>${windSpeed}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            weatherDataDiv.innerHTML = 'Error fetching weather data.';
        });
});