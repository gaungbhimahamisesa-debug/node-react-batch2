import express from "express"
import { createCategory, deleteCategory, readCategory, readCategoryById, updateCategory } from "../controllers/CategoryController.js"
import { createProduct, deleteProduct, readProduct, readProductById, updateProduct } from "../controllers/ProductController.js"


const router = express.Router();

// CATEGORY
router.post("/category", createCategory);
router.get("/category", readCategory);
router.get("/category/:id", readCategoryById);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

// PRODUCT
router.post("/product", createProduct);
router.get("/product", readProduct);
router.get("/product/:id", readProductById);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
