const api = {
    key: "71fc095658ceb9413b5f8ff33f72253c",
    base: "https://api.openweathermap.org/data/2.5/",
}

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var container= document.querySelector('.container');


const getData = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=71fc095658ceb9413b5f8ff33f72253c')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.name);
            const markup = ` <div class="container">
            <div class="card">
              <h1 class="name" id="name">${data.name}</h1>
              <h3 class="country">${data.sys.country}</h3>
             <p class="temp">Celsius Temp: ${Math.round((data.main.temp - 32) / 1.8 )} °C </p>
             <p class="temp">Fahrenheit Temp: ${data.main.temp} °F </p>
             <p class="clouds">Main: ${data.weather[0].main}</p>
             <p class="desc">Desc: ${data.weather[0].description}</p>
             <p class="desc">Humidity: ${data.main.humidity}%</p>
          </div>`
            container.innerHTML = markup
            
          localStorage.setItem("city", markup)
         
            
            
        })
        .catch(err => alert("Wrong city name!"));
        input.value ="";
        
    }
container.innerHTML = localStorage.getItem("city")
button.addEventListener('click', getData);