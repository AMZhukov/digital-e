const path = require('path');

const express = require('express');
const API = require('./routes/API.js');

const app = express();

const isProd = process.env.NODE_ENV === 'production';

console.log(`Env loading ${isProd ? 'PROD' : 'DEV'}`);

app.use(express.json());

app.use('/api', API);

if (isProd) {
  app.use('/', express.static(path.join(__dirname, 'client', 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

function start() {
  app.listen(80, () => {
    console.log(`Server has been started`);
  });
}
start();
