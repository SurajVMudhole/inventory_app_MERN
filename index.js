import express from "express";
const port = 3100;
const server = express();
import ProductController from "./src/controllers/product.controller.js";
// create instance of productcontroller
const productController = new ProductController();

server.get("/", productController.getProducts);
server.use(express.static("src/views"));

server.listen(port, (err) => {
  if (err) console.log("Error listening to server: " + err);
  else console.log(`SERVER listening on port ${port}`);
});
