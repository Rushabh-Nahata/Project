import express from "express";
import {
  processPayment,
  sendStripeApiKey,
} from "../controllers/paymentControllers.js";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

router.post("/payment/process", isAuthenticatedUser, processPayment);
router.get("/stripeapikey", isAuthenticatedUser, sendStripeApiKey);

export default router;
