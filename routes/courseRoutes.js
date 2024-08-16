const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

// Define the routes
router.get('/course/:courseId/student-ids', courseController.getStudentIdsFromCourse);
router.get('/all', courseController.getAllCourse);
router.get('/:id', courseController.getCourseById);
router.get('/:id', courseController.getStudentbyListofCourse);
router.post('/add', courseController.createCourse);
router.delete('/:id', courseController.deleteCourse);
router.put('/:id', courseController.updateCourse);

module.exports = router;
