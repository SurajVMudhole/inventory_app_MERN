import path from "path";
import productModel from "../models/products.model.js";

export default class ProductController {
    getProducts(req, res) {
        let products = productModel.get();
        res.render("products", { products: products });
    }
    getAddForm(req, res) {
        res.render("new_product", { errormsg: null });
    }

    addProducts(req, res) {
        productModel.add(req.body);
        let products = productModel.get();
        return res.render("products", { products: products });
    }

    getUpdateProductView(req, res, next) {
        //1.if product exists return view
        const id = req.params.id;
        const productfound = productModel.getById(id);
        if (productfound) {
            return res.render("update_product", {
                product: productfound,
                errormsg: null,
            });
        } else {
            res.status(401).send("Product not Found");
        }

        //2. if not return error message
    }
}