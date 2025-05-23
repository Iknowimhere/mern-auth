import mongoose from "mongoose";


async function connectDB() {
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDB;