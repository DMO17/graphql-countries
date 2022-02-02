const axios = require("axios");

const rates = async () => {
  const url = `https://openexchangerates.org/api/latest.json?app_id=${process.env.API_RATES_KEY}`;

  const { data } = await axios.get(url);

  if (data?.rates) {
    return Object.entries(data?.rates).map(([code, rate]) => ({ code, rate }));
  } else return [];
};

module.exports = rates;
