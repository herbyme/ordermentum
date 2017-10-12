const express = require('express');
const router = express.Router();

const util = require('../util/util');

/* GET vending machine page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Vending Machine' });
});

/* POST whether coin is accepted */
router.post('/valid/coin', (req, res) => {
  if (util.validCurrency(req.body.currency) && util.validCoins(req.body.amount)) {
    const candy = util.findCandy(parseFloat(req.body.total) + parseFloat(req.body.amount));
    res.json({ error: false, result: req.body.amount, candy: candy });
  } else {
    res.json({ error: true });
  }
});

module.exports = router;
