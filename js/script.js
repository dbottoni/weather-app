var searchButton = document.querySelector('.searchButton')
var inputValue = document.querySelector('.searchBox')
var city = document.querySelector('.city');
var date = document.querySelector('.date')
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvindex = document.querySelector('.uvindex');
var fiveDayContainer = document.querySelector('.searchList');
var savedButton = document.querySelector('.saved-button');



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
    var currentHour = moment.unix(data.dt).format('MMMM Do YYYY');
    console.log(currentHour);
    console.log(data['dt']);

    
    city.innerHTML = nameValue;
    date.innerHTML = currentHour;
    temp.innerHTML = "Temp: " + tempValue;
    wind.innerHTML = "Wind Speed: " + windValue;
    humidity.innerHTML = "Humidity: " + humidValue + "%";

    // console.log(data.weather);
    //   var iconcode = data.weather[0].icon;
      
    //   var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      
    //   $('#wicon').attr('src', iconurl);
  

    fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=fabb0e1d664af0eebed6cbacc7200253`)
    .then(response=> response.json())
    .then(data => {
      
      var uvValue = data.current.uvi;
      console.log(data); 
      uvindex.innerHTML= "UV Index: " + uvValue;
      
      // var uv = [0,1,2,3,4,5];
      // for (var i = 0; i < uv.length; i++){
  
      // if (uvValue > 0 && uvValue <= 2) {
      //   $(`#uv-color${uv[i]}`).css("background-color", "red").css("color", "wjite");
      // }
      // }

      // Insert Date in Cards
          

      // Insert Temp in Cards
      var cardTemp = [1,2,3,4,5]; 

      for (var i = 0; i < cardTemp.length; i++){
        
        var tempDay = Math.round(((parseFloat(data['hourly'][i]['temp'])-273.15)*1.8)+32) + '&deg';        
        var tempEl = document.getElementById(`card-temp-${cardTemp[i]}`);
        tempEl.innerHTML = `Temp: ${tempDay}`;   
        
        var iconcode = data.daily[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        
        $(`#wicon-${cardTemp[i]}`).attr('src', iconurl);

        var windDay = data['daily'][i]['wind_speed'] + 'MPH';
        var windEl = document.getElementById(`wind-${cardTemp[i]}`);
        windEl.innerHTML = `Wind: ${windDay}`;

       }

      //Insert Wind Speed in Cards
      // var windDate = [1,2,3,4,5];
      // for (var i = 0; i < windDate.length; i++){
        
      //   var windDay = data['daily'][i]['wind_speed'] + 'MPH';
      //   var windEl = document.getElementById(`wind-${windDate[i]}`);
      //   windEl.innerHTML = `Wind: ${windDay}`;
      //   //console.log(windEl);

      //  }
        
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

  var btn = document.createElement("BUTTON");
  btn.innerHTML = inputValue.value;
  console.log("search", document.querySelector('.searchList'));
  document.querySelector('.searchList').appendChild(btn);
  




});


 