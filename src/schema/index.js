const { gql } = require("apollo-server");

const typeDefs = gql`
  type Country {
    name: String
    countryCode: String
    isIndependent: Boolean
    isUnMember: Boolean
    region: String
    languages: [String]
    latitude: Float
    longitude: Float
    population: Int
    flagImageUrl: String
    currencies: [Currency]
    capital: Capital
  }

  type Currency {
    code: String
    name: String
    symbol: String
    rates: [Rates]
  }

  type Rates {
    code: String
    rates: Float
  }

  type Capital {
    name: String
    latitude: Float
    longitude: Float
    currentWeather: Weather
    forecastWeather: [Weather]
  }

  type Weather {
    date: String
    temperature: Float
    humidity: Float
    windSpeed: Float
    weatherIconUrl: String
  }

  type Query {
    country(countryCode: String!): Country
  }
`;

module.exports = typeDefs;
