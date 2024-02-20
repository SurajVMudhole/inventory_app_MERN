import express from "express";
import path from "path";
import bodyParser from "body-parser";
import ejsLayouts from "express-ejs-layouts";
import { uploadFile } from "./src/middlewares/file_upload.middleware.js";
import ProductController from "./src/controllers/product.controller.js";
import UserController from "./src/controllers/user.controller.js";
const server = express();
const port = 8000;
//set view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// create instance of productcontroller
const productController = new ProductController();
const userController = new UserController();
//set layout
server.use(ejsLayouts);
//set data parsing
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static("src/views"));
server.use(express.static("public"));

//authentication
server.get("/register", userController.getRegister);
server.get("/login", userController.getLogin);
server.post("/register", userController.postRegister);
server.post("/login", userController.postLogin);
server.get("/", productController.getProducts);
server.get("/new", productController.getAddForm);
server.post("/", uploadFile.single("imageUrl"), productController.addProducts);
server.get("/update_product/:id", productController.getUpdateProductView);
server.post("/update_product", productController.updateProductPost);
server.post("/delete_product/:id", productController.deleteProduct);

server.listen(port, (err) => {
  if (err) console.log("Error listening to server: " + err);
  else console.log(`SERVER listening on port ${port} `);
});
