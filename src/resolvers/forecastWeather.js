const axios = require("axios");

const forecastWeather = async (parent, args) => {
  const apiKey = "393609ac7b2e5f25ccdd00e626ee13dd";

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${parent.latitude}&lon=${parent.longitude}&appid=${apiKey}&units=imperial`;

  const { data } = await axios.get(url);

  console.log(data);

  return [];
};

module.exports = forecastWeather;
