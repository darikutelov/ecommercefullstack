import { Request, Response } from "express"

function listProducts(req: Request, res: Response) {
  res.send("the list of products")
}

function getProductById(req: Request, res: Response) {
  res.send("get product")
}

function createProduct(req: Request, res: Response) {
  res.send("create product")
}

function updateProduct(req: Request, res: Response) {
  res.send("update product")
}
function deleteProduct(req: Request, res: Response) {
  res.send("delete product")
}
export {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}
