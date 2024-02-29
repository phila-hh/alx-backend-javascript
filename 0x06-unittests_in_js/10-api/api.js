const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (_req, resp) => {
  resp.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (requ, resp) => {
  const id = requ.params.id;

  resp.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, resp) => {
  resp.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (requ, resp) => {
  let usrname = '';

  if (requ.body) {
    usrname = requ.body.userName;
  }

  resp.send(`Welcome ${usrname}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
