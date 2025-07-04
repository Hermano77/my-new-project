async function getWeather() {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "8ecc7f7889b879719903ea39d840fc94";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // Debug: check data in browser console

    if (response.ok) { // same as data.cod === 200
      document.getElementById("result").innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById("result").innerHTML = `<p>${data.message}</p>`;
    }
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerHTML = `<p>Error fetching data</p>`;
  }
}
