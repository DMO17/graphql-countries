const axios = require("axios");

const capital = async (parent, args) => {
  return {
    name: parent?._capital,
    latitude: parent?.latitude,
    longitude: parent?.longitude,
  };
};

module.exports = capital;
