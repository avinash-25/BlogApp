import userModel from "../Module/user.model.js";

export const addUser = async (req, res) => {
  const { email, password, name } = req.body;
  let newUser = await userModel.create({ email, password, name });
  res
    .status(201)
    .json({ success: true, message: "User added successfully", newUser });
};

export const getUsers = async (req, res) => {
  let users = await userModel.find();

  if (users.length === 0)
    return res.status(200).json({ success: false, message: "No users Found" });

  res.status(200).json({
    success: true,
    noOfUsers: users.length,
    message: "users fetched",
    users,
  });
};

export const getUser = async (req, res) => {
  console.log(req.params);
  let userID = req.params.id; //! this id variable is defined in routes file
  let user = await userModel.findById(userID); //? user variable is honding an object, if not found then holds null

  if (!user)
    return res.status(404).json({ success: false, message: "No user found" });
  res.status(200).json({ success: true, message: "user found", user });
};

export const updateUser = async (req, res) => {
  let userID = req.params.id;

  let existIngUser = await userModel.findById(userID);
  if (!existIngUser)
    return res.status(200).json({ success: false, message: "User Not Found" });

  // let updatedData = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  // };

  let user = await userModel.updateOne(
    { _id: userID }, // filter
    { $set: req.body } // update
  );
  res.status(200).json({ success: true, message: "updated", user });
};

//? findByIdAndUpdate : Will find the document first, if not found is will not do anything else document will be updated.

export const deleteUser = async (req, res) => {
  let userID = req.params.id;

  let deleteUser = await userModel.deleteOne({ _id: userID });

  res.status(200).json({ success: true, message: "User deleted" }, deleteUser);
};
