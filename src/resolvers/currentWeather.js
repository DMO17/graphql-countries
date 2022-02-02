const currentWeather = async (parent, args) => {
  const apiKey = "393609ac7b2e5f25ccdd00e626ee13dd";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  const { data } = await axios.get(url);

  return {
    date: "TODAY",
    temperature: data.main?.temp,
    humidity: data.main?.humidity,
    windSpeed: data.wind?.speed,
    weatherIconUrl: data.weather[0]?.icon,
  };
};

module.exports = currentWeather;
