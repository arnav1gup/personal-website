const mongoose = require('mongoose');
const db = 'mongodb+srv://arnav1:test123@cluster0-opdre.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
       await mongoose.connect(db, {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
       console.log('Database connected');
    } catch (err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;