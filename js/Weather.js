export default class Weather {
    
    constructor(city, countryCode) {
        this.apiKey = '7fb1d257cbd604b8d339cdc970255d7e';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
}