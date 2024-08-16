const express = require('express');
const serverless = require('serverless-http');

const app = express();

const courseRoutes = require('../routes/courseRoutes'); 
app.use('/.netlify/functions/api/course', courseRoutes);

module.exports.handler = serverless(app);
