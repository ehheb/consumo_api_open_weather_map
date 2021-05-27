export default class UI {

    constructor() {
        this.location = document.getElementById('weather-location');
        this.description = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.minMax = document.getElementById('weather-min-max')
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    render(weather) {
        this.location.textContent = weather.name + ' / ' + weather.sys.country; 
        this.description.textContent = weather.weather[0]['description'];
        this.string.textContent = 'Actual: ' + weather.main.temp + '°c';
        this.minMax.textContent = 'min: ' + weather.main.temp_min + '°c' + ' max: ' + weather.main.temp_max + '°c';
        this.humidity.textContent = 'Humedad: ' + weather.main.humidity + ' %';
        this.wind.textContent = 'Viento: ' + weather.wind.speed + ' m/s';
    }
}