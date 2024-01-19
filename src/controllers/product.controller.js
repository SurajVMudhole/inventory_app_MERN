import path from "path";
import productModel from "../models/products.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = productModel.get();
    console.log(products);
    return res.sendFile(
      path.join(path.resolve(), "src", "views", "products.html")
    );
  }
}
