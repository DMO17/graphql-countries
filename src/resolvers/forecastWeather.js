const axios = require("axios");
const moment = require("moment");

const forecastWeather = async (parent, args) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${parent.latitude}&lon=${parent.longitude}&appid=${process.env.API_WEATHER_KEY}&units=imperial`;

  const { data } = await axios.get(url);

  if (data?.daily) {
    return data.daily.slice(1, 6).map((each) => {
      return {
        date: moment.unix(each.dt).format("DD/MM/YYYY"),
        temperature: each.temp,
        humidity: each.humidity,
        windSpeed: each.wind_speed,
        weatherIconUrl: `http://openweathermap.org/img/w/${each.weather[0]?.icon}.png`,
      };
    });
  } else return [];
};

module.exports = forecastWeather;
