const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

// Define the routes
router.get('/all', courseController.getAllCourse);

module.exports = router;
