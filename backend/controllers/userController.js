import User from "../models/userModels.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/jwtToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

//Register our user
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //Creating a user
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "This is a sample id",
        url: "ProfilePicUrl",
      },
    });

    //This token is create in user model
    sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
};

//Login a user

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Checking if user has given password and email both
    if (!email || !password) {
      return next(new ErrorHandler("Please enter email and password !", 400));
    }

    //If you get both check in the database
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }

    //Check if password matched or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }

    //If matches then send the token
    sendToken(user, 200, res);
  } catch (err) {
    next(err.stack);
  }
};

//Logout a user
export const logout = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (err) {
    next(err);
  }
};

//Forgot password

export const forgotPassword = async (req, res, next) => {
  try {
    //We just find by email, as we have clicked on forgot password
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    //GET ResetPassword Token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n${resetPasswordUrl} \n\nIf you have not requested this email then please Ignore it !`;

    try {
      await sendEmail({
        email: user.email,
        subject: `ShopHub Password Recovery`,
        message,
      });

      res.status(200).json({
        success: true,
        message: `Email sent to ${user.email} successfully !`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });

      return next(new ErrorHandler(error.message, 500));
    }
  } catch (err) {
    next(err.stack);
  }
};

//RESET PASSWORD FUNCTION
export const resetPassword = async (req, res, next) => {
  try {
    //Get the req token from the url, and hash it
    //Creating token hash
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    //Once you find the hash token, you must search that particular user in the Database

    //For this user the expire time of password must be greater than Date.now()
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    //If you don't get the user, return some error
    if (!user) {
      return next(
        new ErrorHandler(
          "Reset Password Token has invalid or has been expired",
          404
        )
      );
    }

    //IF user enters wrong confirm password then return an error
    if (req.body.password !== req.body.confirmPassword) {
      return next(new ErrorHandler("Password dosent match", 400));
    }

    //if the password is matched just change the user password
    user.password = req.body.password;

    //Just do these two things undefined
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    //Use this to save the user
    await user.save();

    //Once the password is changed, Just login the user

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};
