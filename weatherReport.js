const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "662d74eda51541ddc9c6cfed12d1dafc";

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    const cityName = cityInput.value;
    if(cityName){
        try{
            const weatherData = await getWeatherData(cityName);
            displayWeatherInfo(weatherData);
        }
        catch(error)
        {
            console.error(error);
            displayError(error);
        }

    }
    else{
        displayError("Please enter a city !!!")
    }

});

async function getWeatherData(city)
{ 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response  = await fetch(apiUrl);
    console.log(response);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    console.log(data);
    const {name:city, main:{temp, humidity}, weather:[{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";
    
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");

    tempDisplay.textContent = `${(temp-273.15).toFixed(2)}°c`;
 
    tempDisplay.classList.add("tempDisplay");

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");

    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
}

function displayError(message){
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent='';
    card.style.display = "flex";
    card.appendChild(errorDisplay)


}