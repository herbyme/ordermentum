// This should be a db store
const items = {
  'Caramel': 2.50,
  'Hazelnut': 3.10,
  'Organic Raw': 2.00,
};

// This should be in a config file
const CURRENCY  = 'AUD';
const MAX_AMOUNT = 2.00;
const MIN_AMOUNT = 0.10;

// 'AUD' should be in a configuration file
exports.validCurrency = (currency) => {
  return (currency === CURRENCY) ? true : false;
};

// Assumes amount is a float and user hasn't used unidentifiable money
exports.validCoins = (amount) => {
  if (parseFloat(amount) === NaN) {
    return false;
  } else {
    return (amount >= MIN_AMOUNT && amount <= MAX_AMOUNT) ? true : false;
  }
};

// Store the results in an array.
// Allows it to be extensible, adding different goods with same price
// e.g. Raw Coconut Water: 3.10
// This means that more than one selection is returned back
exports.findCandy = (amount) => {
  let results = [];
  for (let key in items) {
    if (items[key] === amount) {
      results.push(key);
    }
  }

  return results;
};