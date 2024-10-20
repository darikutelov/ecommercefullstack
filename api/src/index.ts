import express, { json, urlencoded } from "express"
import productRouter from "./routes/products"

const port = 8000
const app = express()
app.use(urlencoded({ extended: true }))
app.use(json())

app.use("/products", productRouter)

app.listen(port, () => {
  console.log(`🎯 Ecommerce api listening on port: ${port}!`)
})
