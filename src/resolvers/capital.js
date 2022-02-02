const axios = require("axios");

const capital = async (parent, args) => {
  const apiKey = "393609ac7b2e5f25ccdd00e626ee13dd";

  const cityName = parent?._capital.split(",")[0];

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  const { data } = await axios.get(url);

  return {
    name: cityName,
    latitude: data?.coord?.lon,
    longitude: data?.coord?.lat,
  };
};

module.exports = capital;
