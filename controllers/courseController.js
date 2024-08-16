const Course = require('../models/course');

// post api
exports.createCourse =  async (req,res) => {
const {course, title, instName, CrHour,stdId, code,description, credits, } = req.body;
const courseData = new Course({
    course,
     title, 
     instName, 
     CrHour,
     stdId,
     code,
     description,
    credits,
  
   
    });
    try{
await courseData.save();
res.status(201).json({course:courseData});
    }catch(error){
     console.log(error);
    }
};
// get api
/*exports.getAllCourse = async (req, res) =>{
    try{
const courseData = await Course.find();
res.status(200).json({course:courseData});
    }catch(error){
res.status(500).json({message:error.massage});
    };
};
*/

//updated by eshban//
exports.getAllCourse = async (req, res) => {
    console.log('getAllCourse method called');

    try {
        console.log('Attempting to fetch all courses from the database...');
        
        // Start a timer to measure query performance
        console.time('Database query time');

        const courseData = await Course.find();

        // Stop the timer and log the time taken
        console.timeEnd('Database query time');

        // Log the number of courses fetched
        console.log(`Fetched ${courseData.length} courses from the database`);

        // Send the courses as a response
        res.status(200).json({ course: courseData });
    } catch (error) {
        // Log the error details
        console.error('Error occurred in getAllCourse:', error);
        
        // Send an error response with more detailed error information
        res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
};






exports.getCourseById = async (req, res) => {
    try {
      const courseId = req.params.id;
  
      // Find the course by its ID
      const course = await Course.findById(courseId);
  
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
  
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  //list of styudent
  
  exports.getStudentbyListofCourse = async (req, res) => {
    try {
    
      const course = req.params.Cname;
      const Student = await Course.find(course);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // delete course api

exports.deleteCourse = async (req, res) => {
  try {
      const { id } = req.params;
      const course = await Course.findByIdAndDelete(id);

      if (!course) {
          return res.status(404).json({ message: 'Course not found' });
      }

      res.json({ message: 'Course deleted successfully', course });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
};


// course update
exports.updateCourse = async (req, res) => {
  try {
      const { id } = req.params;
      const updateData = req.body;

      const course = await Course.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

      if (!course) {
          return res.status(404).json({ message: 'Course not found' });
      }

      res.json({ message: 'Course updated successfully', course });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
};


// .........
exports.getStudentIdsFromCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Find the course by ID and select the studentIds field
    const course = await Course.findById(courseId).select('studentIds');

    if (!course || course.studentIds.length === 0) {
      return res.status(404).json({ message: 'No students found for this course' });
    }

    res.status(200).json(course.studentIds);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
