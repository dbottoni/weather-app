var searchButton = document.querySelector('.searchButton')
var inputValue = document.querySelector('.searchBox')
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvindex = document.querySelector('.uvindex');
var fiveDayContainer = document.querySelector('.five-day-container');
var savedButton = document.querySelectorAll('.saved-button');

function fetchWeatherData(cityName){
fetch ('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +
  '&appid=fabb0e1d664af0eebed6cbacc7200253')
  .then(response=> response.json())
  .then(data => {
    var nameValue = data['name'];
  console.log(data);
    var tempValue = Math.round(((parseFloat(data['main']['temp'])-273.15)*1.8)+32) + '&deg';
    var windValue = data['wind']['speed'] + 'MPH';
    var humidValue = data['main']['humidity'];
  
    city.innerHTML = nameValue;
    temp.innerHTML = "Temp: " + tempValue;
    wind.innerHTML = "Wind Speed: " + windValue;
    humidity.innerHTML = "Humidity: " + humidValue;
  

    fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=fabb0e1d664af0eebed6cbacc7200253`)
    .then(response=> response.json())
    .then(data => {
       
      var uvValue = data.current.uvi;
      console.log(data);

      uvindex.innerHTML= "UV Index: " + uvValue;
      
  
      // Insert Date in Cards
      // var date = [1,2,3,4,5];
      // var now = moment();
      // var weatherDate = moment().format("MM-DD")

      // for (var i = 0; i < date.length; i++){
      //   if (now < weatherDate[i]){
      //     $(`#card-date-${date[i]}`);
      //   }
      // }

      // Insert Icon in Cards
      var iconDate = [1,2,3,4,5];

      for (var i = 0; i < iconDate.length; i++){

          var iconDay = data['daily'][i]['weather'][i]['description'];
          var iconEl = document.getElementById(`icon-${iconDate[i]}`);
          iconEl.innerHTML = iconDay;
      }

      // Insert Temp in Cards
      var cardTemp = [1,2,3,4,5]; 

      for (var i = 0; i < cardTemp.length; i++){
        
        var tempDay = Math.round(((parseFloat(data['hourly'][i]['temp'])-273.15)*1.8)+32) + '&deg';
        var tempEl = document.getElementById(`card-temp-${cardTemp[i]}`);
        tempEl.innerHTML = `Temp: ${tempDay}`;       
       }

      //Insert Wind Speed in Cards
      var windDate = [1,2,3,4,5];
      for (var i = 0; i < windDate.length; i++){
        
        var windDay = data['daily'][i]['wind_speed'] + 'MPH';
        var windEl = document.getElementById(`wind-${windDate[i]}`);
        windEl.innerHTML = `Wind: ${windDay}`;
        console.log(windEl);

       }
        
       //Insert Humidity in Cards
      var cardHumid = [1,2,3,4,5];
      for (var i = 0; i < cardHumid.length; i++){
        
        var humidDay = data['daily'][i]['humidity'];
        var humidEl = document.getElementById(`humid-${cardHumid[i]}`);
        humidEl.innerHTML = `Humidity: ${humidDay}%`;

       }

    })
});

}


searchButton.addEventListener('click', function(){
  fetchWeatherData(inputValue.value);

});

// console.log(savedButton);

//  savedButton.addEventListener('click', function(event){
//   var buttonWeather = [0,1,2,3,4,5,6,7];

//   for (var i = 0; i < buttonWeather.length; i++){
    
//     fetchWeatherData(event.target.innerHTML);
//   }


//  });
