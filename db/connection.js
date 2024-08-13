
const mongoose = require('mongoose');

const connectDB = async () => {
    //console.log(process.env.MONGODB_URL);
    try {
        await mongoose.connect('mongodb+srv://komalkatherine:komal4215@crowndb.9qyqgdq.mongodb.net/?retryWrites=true&w=majority&appName=crowndb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;
