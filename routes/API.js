const { Router } = require('express');

const API = Router();

API.post('/sendForm', async (req, res) => {
  res.status(200).json({ message: 'All right' });
});

module.exports = API;
