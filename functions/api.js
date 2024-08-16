const express = require('express');
const serverless = require('serverless-http');

const app = express();

const courseRoutes = require('../routes/courseRoutes'); 
app.use('/.netlify/functions/api/course', courseRoutes);

// Basic test route to verify that `api.js` is working
app.get('/.netlify/functions/api/test', (req, res) => {
  res.json({ message: 'Test route working!' });
});


module.exports.handler = serverless(app);
