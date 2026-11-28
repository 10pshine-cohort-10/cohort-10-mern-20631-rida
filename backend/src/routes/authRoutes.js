import { Router } from "express";
import { signup, login, logout, getMe } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = Router();

// Signup and login are used to establish authentication
router.post("/signup", signup);
router.post("/login", login);
// Logout and /me require an already authenticated user.
// Hence middleware used to verify the user's identity first.
router.post("/logout", protect, logout);
router.get("/me", protect, getMe);

export default router;
