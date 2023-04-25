import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} from "../controllers/productController.js";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

//GET
router.get("/products", getAllProducts);
router.get(
  "/products/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getProductDetails
);

//POST
router.post(
  "/products/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createProduct
);

//PUT
router.put(
  "/products/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateProduct
);

//DELETE
router.delete(
  "/products/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

export default router;
