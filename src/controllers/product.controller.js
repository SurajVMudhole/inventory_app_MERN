import path from "path";
import productModel from "../models/products.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = productModel.get();
    res.render("products", {
      products: products,
      userEmail: req.session.userEmail,
    });
  }
  getAddForm(req, res) {
    res.render("new_product", {
      errormsg: null,
      userEmail: req.session.userEmail,
    });
  }

  addProducts(req, res) {
    const { name, desc, price } = req.body;
    const imageUrl = "/images" + req.file.filename;
    productModel.add(name, desc, price, imageUrl);
    let products = productModel.get();
    return res.render("products", {
      products: products,
      userEmail: req.session.userEmail,
    });
  }

  getUpdateProductView(req, res, next) {
    //1.if product exists return view
    const id = req.params.id;
    const productfound = productModel.getById(id);
    if (productfound) {
      return res.render("update_product", {
        product: productfound,
        errormsg: null,
        userEmail: req.session.userEmail,
      });
    } else {
      //2. if not return error messages
      res.status(401).send("Product not Found");
    }
  }

  updateProductPost(req, res) {
    productModel.update(req.body);
    let products = productModel.get();
    return res.render("products", {
      products: products,
      userEmail: req.session.userEmail,
    });
  }
  deleteProduct(req, res) {
    const id = req.params.id;
    const productfound = productModel.delete(id);
    if (productfound) {
      res
        .status(200)
        .render("products", {
          products: productfound,
          userEmail: req.session.userEmail,
        });
    } else {
      res.status(401).send("Product not Found");
    }
  }
}
