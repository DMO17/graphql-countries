const axios = require("axios");

const rates = async () => {
  const url = `https://openexchangerates.org/api/latest.json?app_id=01ff3023a68848a08c4e98a88c54629c`;

  const { data } = await axios.get(url);

  if (data?.rates) {
    return Object.entries(data?.rates).map(([code, rate]) => ({ code, rate }));
  } else return [];
};

module.exports = rates;
