import WEATHER_API_KEY from './apikey.js'
export default class Weather {
    
    constructor(city, countryCode) {
        this.apiKey = WEATHER_API_KEY;
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
} 