const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/.netlify/functions/api/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports.handler = serverless(app);
