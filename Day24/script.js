const apiKey = "YOUR_API_KEY"
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let inputBox = document.getElementById('inputBox');

let btn = document.getElementById('btn');

async function checkWeather(city){
    const res = await fetch(apiURL + city +  `&appid=${apiKey}`);
    let data = await res.json();
    if(res.status == 404){
        document.querySelector('.city').innerHTML = "City Not Found";
    }
    else {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + " °C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind').innerHTML = data.main.pressure + " Km/h";
    let condition = data.weather[0].main;
    if(condition == "Clouds"){
        document.querySelector('.weatherIcon').src = "./Images/clouds.png";
    }else if(condition == "Rain"){
        document.querySelector('.weatherIcon').src = "./Images/rain.png" 
    }else if(condition == "Drizzle"){
        document.querySelector('.weatherIcon').src = "./Images/drizzle.png" 
    }else if(condition == "Mist"){
        document.querySelector('.weatherIcon').src = "./Images/mist.png" 
    }else if(condition == "Clear"){
        document.querySelector('.weatherIcon').src = "./Images/clear.png"
    }
    }
}

btn.addEventListener('click',()=>{
    let inputValue = inputBox.value;
    if(inputValue == '') alert("Please Enter City Or Country")
    else checkWeather(inputValue);
    inputBox.value = '';
})

