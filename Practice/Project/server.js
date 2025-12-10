import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/database.config.js';
import blogRoutes from './routes/blog.route.js';
import { errorMid } from './middlewares/error.middleware.js';
dotenv.config();


const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/blog", blogRoutes);


app.use(errorMid)

app.listen(process.env.PORT, () => {
    console.log(`Server Started at http://localhost:${process.env.PORT}`);
})


/*
{
  "Author": "Avinash Ranjan",
  "title": "NodeJS",
  "description": "Nodejs provides runtime enviroment of javascript"
}
*/