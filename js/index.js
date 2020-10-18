// alert('Holaaaa');
import Weather from './Weather.js';
import UI from './UI.js'

const weather = new Weather('London','uk');
const ui = new UI();

async function fetchWeather () {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}
document.addEventListener('DOMContentLoaded', fetchWeather);
