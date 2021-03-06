var searchButton = document.querySelector('.searchButton')
var inputValue = document.querySelector('.searchBox')
var city = document.querySelector('.city');
var date = document.querySelector('.date')
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvindex = document.querySelector('.uvindex');
var fiveDayContainer = document.querySelector('.searchList');


function fetchWeatherData(cityName){
fetch ('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +
  '&appid=fabb0e1d664af0eebed6cbacc7200253')
  .then(response=> response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = Math.round(((parseFloat(data['main']['temp'])-273.15)*1.8)+32) + '&deg';
    var windValue = data['wind']['speed'] + 'MPH';
    var humidValue = data['main']['humidity'];
    var currentHour = moment.unix(data.dt).format('MMMM Do YYYY');

    city.innerHTML = nameValue;
    date.innerHTML = currentHour;
    temp.innerHTML = "Temp: " + tempValue + 'F';
    wind.innerHTML = "Wind Speed: " + windValue;
    humidity.innerHTML = "Humidity: " + humidValue + "%";
  

    fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=fabb0e1d664af0eebed6cbacc7200253`)
    .then(response=> response.json())
    .then(data => {
      
      var uvValue = data.current.uvi;
      uvindex.innerHTML= "UV Index: " + uvValue;

      if (uvValue > 0 && uvValue <= 3.5){
        $(`#uv-color`).addClass("low");
      } else if (uvValue > 3.5 &&  uvValue <= 6.5){
        $(`#uv-color`).addClass("moderate");
      } else if (uvValue > 6.5 &&  uvValue <= 10){
        $(`#uv-color`).addClass("high");
      }

          
        var dateFive = [1,2,3,4,5];
        for (var i = 0; i < dateFive.length; i++){
        
        var cardDate = moment.unix(data.daily[i].dt).format('MM/DD/YY');
        var dateEl = document.getElementById(`card-date-${dateFive[i]}`);
        dateEl.innerHTML = cardDate;
      
        }

      // Insert Data in Cards
      var cardIndex = [1,2,3,4,5]; 

      for (var i = 0; i < cardIndex.length; i++){

        var tempDay = Math.round(((parseFloat(data['hourly'][i]['temp'])-273.15)*1.8)+32) + '&deg' + 'F';        
        var tempEl = document.getElementById(`card-temp-${cardIndex[i]}`);
        tempEl.innerHTML = `Temp: ${tempDay}`;   
        
        var iconcode = data.daily[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";      
        $(`#wicon-${cardIndex[i]}`).attr('src', iconurl);

        var windDay = data['daily'][i]['wind_speed'] + 'MPH';
        var windEl = document.getElementById(`wind-${cardIndex[i]}`);
        windEl.innerHTML = `Wind: ${windDay}`;

        var humidDay = data['daily'][i]['humidity'];
        var humidEl = document.getElementById(`humid-${cardIndex[i]}`);
        humidEl.innerHTML = `Humidity: ${humidDay}%`;

       }

    })
});

}


searchButton.addEventListener('click', function(){
  fetchWeatherData(inputValue.value);
 
  var btn = document.createElement("button");
  btn.innerHTML = inputValue.value;
  
  document.querySelector('.searchList').appendChild(btn);
  btn.setAttribute('style', 'background-color: #0069d9');


});