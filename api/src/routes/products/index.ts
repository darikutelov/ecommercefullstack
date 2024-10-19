import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
  res.send("Products!")
})

router.get("/:id", (req, res) => {
  res.send("Product " + req.params.id)
})

router.post("/", (req, res) => {
  res.send("Create product")
})

export default router
