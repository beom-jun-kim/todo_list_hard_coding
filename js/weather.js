const API_KEY = '3cdb98a57730faca4e368816041c8e44';

function geoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector('#weather span:first-chlid');
    const city = document.querySelector('#weather span:last-chlid');
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });

}

function geoError(){
  alert("can't fine");
}
navigator.geolocation.getCurrentPosition(geoOk,geoError);