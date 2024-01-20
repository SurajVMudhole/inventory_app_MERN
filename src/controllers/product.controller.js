import path from "path";
import productModel from "../models/products.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = productModel.get();
    res.render("products", { products: products });
  }
}
