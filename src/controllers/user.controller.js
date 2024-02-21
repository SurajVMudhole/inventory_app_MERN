import UserModel from "../models/user.model.js";
import productModel from "../models/products.model.js";
export default class UserController {
  getRegister(req, res) {
    res.status(200).render("user_register");
  }
  getLogin(req, res) {
    res.status(200).render("login", { errormsg: null });
  }
  postRegister(req, res) {
    const { user_name, user_email, password } = req.body;
    UserModel.add(user_name, user_email, password);
    console.log(req.body);
    return res.status(201).render("login", { errormsg: null });
  }
  postLogin(req, res) {
    const { user_email, password } = req.body;
    const logUser = UserModel.getUser(user_email, password);
    if (!logUser) {
      return res
        .status(401)
        .render("/", { errormsg: "Invalid username or password" });
    } else {
      req.session.userEmail = user_email;
      let products = productModel.get();
      return res.status(200).render("products", { products: products });
    }
  }
}
