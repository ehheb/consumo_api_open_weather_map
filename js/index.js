
import Weather from './Weather.js';
import UI from './UI.js';
import Store from './Store.js';


const ui = new UI();
const store = new Store();

const {city, countryCode } = store.getLocationData();

const weather = new Weather(city, countryCode);

async function fetchWeather () {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault(); //Sirve para que no se refresque la página o el formulario

});

document.addEventListener('DOMContentLoaded', fetchWeather);
