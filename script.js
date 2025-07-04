async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "your_api_key_here"; // replace this later with real key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      `;
      document.getElementById("result").innerHTML = result;
    } else {
      document.getElementById("result").innerHTML = `<p>City not found</p>`;
    }
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>Error fetching data</p>`;
  }
}
