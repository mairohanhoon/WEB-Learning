import  express  from "express";
import { loginValidation, signUpValidation } from "../Middlewares/auth.validation.js";
import { loginController, signUpController } from "../Controllers/auth.controller.js";

const authRouter = express.Router()


authRouter.post('/signup', signUpValidation, signUpController)
authRouter.post('/login', loginValidation, loginController)

export default authRouter;