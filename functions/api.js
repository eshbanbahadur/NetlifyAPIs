const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Your existing Express routes
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports.handler = serverless(app);
