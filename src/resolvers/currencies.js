const currencies = (parent, args, info, context) => {
  parent?._currencies
    ? Object.entries(parent?._currencies).map(([code, value]) => ({
        ...value,
        code,
      }))
    : [];
};

module.exports = currencies;
