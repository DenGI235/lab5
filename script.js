document.getElementById('getWeatherBtn').addEventListener('click', function() {
    // Ваш API ключ OpenWeatherMap
    const apiKey = '23d4970ae296f6ef3e16b9fb52fd8d87'; // Замініть 'YOUR_API_KEY' на ваш ключ

    // Назва міста для отримання погодних даних
    const cityName = 'London'; // Можете змінити місто за вашим вибором

    // URL для отримання погодних даних з OpenWeatherMap API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    // Використовуємо fetch для отримання погодних даних
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Отримуємо температуру, вологість і швидкість вітру з отриманих даних
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Формуємо рядок для відображення на веб-сторінці
            const weatherInfoString = `Temperature: ${temperature} K<br>Humidity: ${humidity}%            <br>Wind Speed: ${windSpeed} m/s`;

            // Отримуємо елемент div, де будемо відображати погодні дані
            const weatherInfoDiv = document.getElementById('weatherInfo');

            // Відображаємо погодні дані на веб-сторінці
            weatherInfoDiv.innerHTML = weatherInfoString;
        })
        .catch(error => {
            // Якщо сталася помилка, відображаємо її на веб-сторінці
            const weatherInfoDiv = document.getElementById('weatherInfo');
            weatherInfoDiv.innerHTML = 'Error fetching weather data';
            console.error('Error fetching weather data            <br>Wind Speed: ${windSpeed} m/s`;

            // Отримуємо елемент div, де будемо відображати погодні дані
            const weatherInfoDiv = document.getElementById('weatherInfo');

            // Відображаємо погодні дані на веб-сторінці
            weatherInfoDiv.innerHTML = weatherInfoString;
        })
        .catch(error => {
            // Якщо сталася помилка, відображаємо її на веб-сторінці
            const weatherInfoDiv = document.getElementById('weatherInfo');
            weatherInfoDiv.innerHTML = 'Error fetching weather data';
            console.error('Error fetching weather ', error);
        });
});