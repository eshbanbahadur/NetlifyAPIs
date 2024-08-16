const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();


// Simple test route within courseRoutes.js
router.get('/test-route', (req, res) => {
  res.json({ message: 'Course route working!' });
});

router.get('/all', async (req, res, next) => {
  try {
    const courses = await courseController.getAllCourse();
    res.json(courses);
  } catch (error) {
    next(error);
  }
});

// Define the routes
//router.get('/all', courseController.getAllCourse);

module.exports = router;
