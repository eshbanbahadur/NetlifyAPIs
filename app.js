const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connection');
const studentRoutes = require('./routes/studentRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const courseRoutes = require('./routes/courseRoutes');
const takeRoutes = require('./routes/takeRoutes');
const app = express();

connectDB();
app.use(bodyParser.json());
app.use('/instructor', instructorRoutes);
app.use('/course', courseRoutes);
app.use('/take', takeRoutes);
app.use('/student',studentRoutes);


// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
