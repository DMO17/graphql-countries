const axios = require("axios");
const moment = require("moment");

const currentWeather = async (parent, args) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${parent.name}&appid=${process.env.API_WEATHER_KEY}`;

  const { data } = await axios.get(url);

  return {
    date: moment.unix(data.dt).format("DD/MM/YYYY"),
    temperature: data.main?.temp,
    humidity: data.main?.humidity,
    windSpeed: data.wind?.speed,
    weatherIconUrl: `http://openweathermap.org/img/w/${data.weather[0]?.icon}.png`,
  };
};

module.exports = currentWeather;
