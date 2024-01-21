import express from "express";
import path from "path";
import bodyParser from "body-parser";
import ejsLayouts from "express-ejs-layouts";
import validateRequest from "./src/middlewares/validation.middleware.js";
import ProductController from "./src/controllers/product.controller.js";
const server = express();
const port = 3000;

//set view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// create instance of productcontroller
const productController = new ProductController();
//set layout
server.use(ejsLayouts);
//set data parsing
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(express.static("src/views"));
server.get("/", productController.getProducts);
server.get("/new", productController.getAddForm);
server.post("/", validateRequest, productController.addProducts);

server.listen(port, (err) => {
  if (err) console.log("Error listening to server: " + err);
  else console.log(`SERVER listening on port ${port} `);
});
