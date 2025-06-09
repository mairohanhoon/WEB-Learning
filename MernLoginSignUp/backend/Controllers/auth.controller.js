import UserModel from "../Models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User is already exists, you can login",
        success: false,
      });
    }

    const newUser = await UserModel({ name, email, password });
    newUser.password = await bcrypt.hash(password, 10);
    const result = await newUser.save();
    return res
      .status(201)
      .json({ message: "Signup successfully", success: true, result });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Signup Internal Server Error", success: false });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(409).json({
        message: "Email doesnt match login failed",
        success: false,
      });
    }
    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      return res.status(409).json({
        message: "Password doesnt match login failed",
        success: false,
      });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    return res
    .status(200)
    .json({
      message: "Login successfully",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Login Internal Server Error", success: false });
  }
};

export { signUpController, loginController };
