const apiKey="730fc502ad4b78bc331cabef5bd36eb5";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.getElementById("city");
const searchBtn=document.querySelector("#input button");
const weatherIcon=document.querySelector(".weather .weather-icon");
const input=document.querySelector("#input input");

async function checkWeather(city) {
    const response =await fetch(apiURL+city + `&appid=${apiKey}`);
    
    if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await response.json();
    }

    

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind-speed").innerHTML=data.wind.speed +" km/h";
    
   if (data.weather[0].main=="Clear") {
    weatherIcon.src="img/clear.png";
   } else if (data.weather[0].main=="Clouds") {
    weatherIcon.src="img/cloudy.png";
   } else if(data.weather[0].main=="Rain"){
    weatherIcon.src="img/rain.png";
   }else if(data.weather[0].main=="Drizzle") {
    weatherIcon.src="img/drizzle.png";
   } else if(data.weather[0].main=="Mist"){
    weatherIcon.src="img/mist.png";
   }else if(data.weather[0].main=="Snow"){
    weatherIcon.src="img/snow.png";
   }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="block";
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});
input.addEventListener('keypress',(event)=>{
    if(event.key=="Enter"){
        checkWeather(searchBox.value);
    }
});

