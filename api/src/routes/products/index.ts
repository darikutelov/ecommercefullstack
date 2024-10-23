import { Router } from "express"
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  updateProduct
} from "~/controllers/products"
import { validateData } from "~/middlewares/validationMiddleware"
import { createProductSchema, updateProductSchema } from "~/db/productSchema"
import { verifySeller, verifyToken } from "~/middlewares/authMiddleware"

const router = Router()

router.get("/", listProducts)
router.get("/:id", getProductById)
router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
)
router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
)
router.delete("/:id", verifyToken, verifySeller, deleteProduct)

export default router
