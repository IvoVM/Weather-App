let city = document.getElementById("city__name");
let temp_number = document.getElementById("temperature__number");
let icon = document.getElementById("icons");
let weather = document.getElementById("weather");
let lat;
let long;

//funciones secundarias

const displayData = (obj) => {
  console.log(obj);
  city.textContent = obj.city_name;
  temp_number.textContent = Math.floor(obj.data[0].temp);
  weather.textContent = obj.data[0].weather.description;
  icons = obj.data[0].weather.icon;
  icon.innerHTML = `<img src='icons/${icons}.png'></img>`;
};
const posicion = (pos) => {
  console.log(pos);
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;
  getWeatherData(lat, long);
};
const getLocationData = () => {
  navigator.geolocation.getCurrentPosition(posicion);
};

//Declarar la funcion principal
const getWeatherData = async (lat, long) => {
  //request a la api y obtener objeto con los datos
  //fetch

  const res = await fetch(
    `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${long}&units=metric&lang=es`,
    {
      headers: {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": "743467dfc4msh6c9641cc331ac13p19c162jsn4289d64694cc",
      },
    }
  );

  const data = await res.json();

  //mostrar datos en pantalla
  displayData(data);
};
getLocationData();
