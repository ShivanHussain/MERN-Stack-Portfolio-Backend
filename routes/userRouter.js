import express from "express";
import {
  getUser,
  login,
  logout,
  register,
  updatePassword,
  updateProfile,
  forgotPassword,
  resetPassword,
  getUserForPortfolio,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getuser", getUser);
router.get("/logout", isAuthenticated, logout);
router.get("/portfolio/me", getUserForPortfolio);
router.put("/update/password", isAuthenticated, updatePassword);
router.put("/update/profile/me", isAuthenticated, updateProfile);
router.post("/forgot/password", forgotPassword);
router.put("/password/reset/:token", resetPassword);

export default router;
