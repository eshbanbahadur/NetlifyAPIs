const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Import routes from the root-level routes folder
const courseRoutes = require('../routes/courseRoutes'); // Adjust the path if necessary

// Add some basic logging
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Use the routes with the appropriate path prefix
app.use('/.netlify/functions/api/course', courseRoutes);

// Add a catch-all error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Export the handler
module.exports.handler = serverless(app);
