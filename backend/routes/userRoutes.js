import express from "express";
import {
  forgotPassword,
  getUserDetails,
  loginUser,
  logout,
  registerUser,
  resetPassword,
  updatePassword,
} from "../controllers/userController.js";

import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);

router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);

router.get("/me", isAuthenticatedUser, getUserDetails);
router.put("/password/update", isAuthenticatedUser, updatePassword);

export default router;
