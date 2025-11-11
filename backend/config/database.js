import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URL);
  //? 127.0.0.1 this or localhost
  console.log("database connected");
}

//? Here we have only defined the connection to the database along with databse name.

//? "mongodb://localhost:27017/blogAPP" --> blogAPP databse name
