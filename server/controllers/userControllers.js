import User from "../model/User.js";
import bcrypt from "bcryptjs";

// get all user
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    res
      .status(200)
      .json({ success: true, message: "getAllUser success", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "not found" });
  }
};

// get one user
export const getOneUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const user = await User.findById(id);
    if (user) {
      res
        .status(200)
        .json({ success: true, message: "getOneUser", data: user });
    }
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

// add new user
export const addUser = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(404)
        .json({ success: false, message: "User da ton tai" });
    }
    // hashing pass
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = await User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      role: "customer",
      status: true,
    });
    await newUser.save();
    res.status(200).json({ success: true, message: "add Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "add failed" });
  }
};
// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ success: true, message: "deleted", result });
    } else {
      res.status(404).json({ success: false, message: "failed deleted" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "failed delete" });
  }
};
// update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: "updated", data: updateUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed update" });
  }
};
