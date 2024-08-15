const express = require('express');
const serverless = require('serverless-http');

const app = express();

const courseRoutes = require('../routes/courseRoutes');
const instructorRoutes = require('../routes/instructorRoutes');
const studentRoutes = require('../routes/studentRoutes');
const takeRoutes = require('../routes/takeRoutes');

app.use('/.netlify/functions/api/courses', courseRoutes);
app.use('/.netlify/functions/api/instructors', instructorRoutes);
app.use('/.netlify/functions/api/students', studentRoutes);
app.use('/.netlify/functions/api/takes', takeRoutes);

// Your existing Express routes
// app.get('/.netlify/functions/api/hello', (req, res) => {
//   res.json({ message: 'Hello World' });
// });

module.exports.handler = serverless(app);
