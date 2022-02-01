const country = require("./country");

const resolvers = {
  Query: {
    country,
  },
};

module.exports = resolvers;
