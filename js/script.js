function austinWeather(){
  var austin = document.getElementById('#btnAustin').value;
  fetch(
    'https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&appid=fabb0e1d664af0eebed6cbacc7200253' + 
    austin + 
    '&api_key=fabb0e1d664af0eebed6cbacc7200253'
  )
    .then(function (response) { 
      return response.json();
    })
    .then(function (response) {  
  
      // here down, need to re-work this to get the city name to append to html line 39
      var responseContainerEl = document.querySelector('#city');

      responseContainerEl.innerHTML = '';

      var city = document.createElement('h2');
      city.setAttribute('Austin', 'value');
      responseContainerEl.appendChild(city);
  });
}