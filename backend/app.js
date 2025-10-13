import express from "express";

import connectDB from "./config/database.js";

import userRoutes from "./routers/user.routes.js";

connectDB();

const app = express();

app.use(express.json());

app.use("/api", userRoutes);
//? "/api" --> api version

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running");
});

//! nodemon app.js
// we can define script commands in .json file --> "start" is the default one ot run this start script ---> type `npm start`

//? if you are writing script commands which is not default then to run that script type  -->  npm run SCRIPT_NAME

//! It is also used when we are deploying this application

//! mongoose
// It is a libraray for NodeJS used to interact with database.
//? ODM(Object Document Mapping) and ORM(Object Relation Mapping)
//  It is a Nodejs library that provides a schema/structure based solution to add models in MONGODB, it also provides various other feature like validation and middleware support while giving extra methid to perform CRUD. and making the whole process(interaction with database) a lot easier.

//? users
