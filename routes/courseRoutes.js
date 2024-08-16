const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();


// Simple test route within courseRoutes.js
router.get('/test-route', (req, res) => {
  res.json({ message: 'Course route working!' });
});

// Define the routes
router.get('/all', courseController.getAllCourse);

module.exports = router;
