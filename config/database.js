import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // If the db is already connected, don't connect again 
    if (connected){
        console.log('MongoDB is already conected ... ');
        return;
    }

    // Connect to mongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log('MongoDB connected ... ');
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;