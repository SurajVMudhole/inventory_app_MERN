import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
const server = express();
const port = 3100;

//set view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// create instance of productcontroller
const productController = new ProductController();
server.use(ejsLayouts);
server.use(express.static("src/views"));
server.get("/", productController.getProducts);

server.listen(port, (err) => {
  if (err) console.log("Error listening to server: " + err);
  else console.log(`SERVER listening on port ${port} `);
});
