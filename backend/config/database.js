import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogAPP");
    console.log("Database connected");
}

export default connectDB;

//? Here we have only defined the connection to the database along with databse name.

//? "mongodb://localhost:27017/blogAPP" --> blogAPP databse name