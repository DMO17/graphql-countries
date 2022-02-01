const country = require("./country");
const currencies = require("./currencies");
const rates = require("./rates");

const resolvers = {
  Query: {
    country,
  },

  Country: {
    currencies,
  },

  Currency: {
    rates,
  },
};

module.exports = resolvers;
