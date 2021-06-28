var searchButton = document.querySelector('.searchButton')
var inputValue = document.querySelector('.searchBox')
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvindex = document.querySelector('.uvindex');


searchButton.addEventListener('click', function(){
  
  fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
  '&appid=fabb0e1d664af0eebed6cbacc7200253')
  .then(response=> response.json())
  .then(data => {
    var nameValue = data['name'];
    //var tempValue = data['main']['temp'] + '&deg';
    //var fahrenheit = Math.round(((parseFloat(main.temp)-273.15)*1.8)+32);
    var tempValue = Math.round(((parseFloat(data['main']['temp'])-273.15)*1.8)+32) + '&deg';
    var windValue = data['wind']['speed'] + 'MPH';
    var humidValue = data['main']['humidity'];
    //var uvValue = data['weather']['id'];

    city.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    wind.innerHTML = windValue;
    console.log(windValue);
    humidity.innerHTML = humidValue;
    // uvindex.innerHTML = uvValue;
    // console.log(uvValue)
    })
});


// using workday scheduler js to guide the build for the weather app
// also pulling info from module 6 challenge 
var days = [1,2,3,4,5];
  
for (var i = 0; i < days.length; i++){
  
  var dayEl = document.createElement("p");
  dayEl.classList = "list-item flex-row justify-space-between align-center";

  var weatherEl = document.createElement("span");
  weatherEl.textContent = tempValue;

  dayEl.appendChild(weatherEl);
};
