// function displayWeathers works to append 
// const searchbtn = document.getElementById('searchBtn');
// searchbtn.addEventListener("click",  displayWeather);

// function displayWeather (){
//   var para = document.createElement("P");
//   var temp = document.createTextNode("This is a paragraph");
//   para.appendChild(temp);
//   document.getElementById("temp").appendChild(para);
// }



// function weatherBalloon ( cityID ){
//   var key = 'fabb0e1d664af0eebed6cbacc7200253';
//   fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
//   .then(function(resp) {return resp.json() })
//   .then(function(data){
//     drawWeather(data);
//   })
//   .catch(function(){

//   });
// }
// window.onload = function(){
//   weatherBalloon(4671654);
// }

// function drawWeather (d) {
//   var celcius = Math.round(parseFloat(d.main.temp)-273.15);
//   var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);

//   document.getElementById('city').innerHtml = d.name;
//   document.getElementById('temp').innerHTML = fahrenheit + '&deg';
//   //document.getElementById('wind').innerHTML = d.name;
// }


// call API to get weather data
// var searchButton = document.querySelector('.searchButton')
// var inputValue = document.querySelector('.searchBox')
// var city = document.querySelector('.city');
// var temp = document.querySelector('.temp');
// var wind = document.querySelector('.wind');
// var humidity = document.querySelector('.humidity');
// var uvindex = document.querySelector('.uvindex');

// searchButton.addEventListener('click', function(){

// fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
// '&appid=fabb0e1d664af0eebed6cbacc7200253')
// .then(response=> response.json())
// .then(data => console.log(data))

// .catch(err => alert("wrong!"))

// })

// this works
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
  var tempValue = data['main']['temp'] + '&deg';
  var windValue = data['wind']['gust'] + 'MPH';
  var humidValue = data['main']['humidity'];
  //var uvValue = data[]

  city.innerHTML = nameValue;
  temp.innerHTML = tempValue;
  wind.innerHTML = windValue;
  console.log(windValue)
  humidity.innerHTML = humidValue;
  })
})
