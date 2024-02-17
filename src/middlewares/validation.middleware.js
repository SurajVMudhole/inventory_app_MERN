import pkg from "express-validation";
const { body, validationResult } = pkg;
const validateRequest = async(req, res, next) => {
    //adding validation
    // let errormsg = [];
    // const { name, price, imageUrl } = req.body;
    // if (!name || !price || !imageUrl) {
    //   errormsg.push("Feilds cannot be empty");
    // } else if (parseFloat(price) < 1) {
    //   errormsg.push("Cannot enter nagative price");
    // } else if (name.trim() == "") {
    //   errormsg.push("cannot use this name");
    // }
    // try {
    //   const validurl = new URL(imageUrl).toString();
    // } catch (err) {
    //   errormsg.push("Invalid URL");
    // }
    // if (errormsg.length > 0) {
    //   return res.render("new_product", { errormsg: errormsg });
    // } else {
    //   next();
    // }
    //step1:setup rules for validation
    console.log(req.body);
    const rules = [
        body("name").notEmpty().withMessage("Name is required"),
        body("price").isFloat({ gt: 0 }).withMessage("Price cannot be nagative"),
        body("imageUrl").isURL().withMessage("Invalid image URL"),
    ];
    //step2:run the rules
    await Promise.all(rules.map((rule) => rule.run(req)));
    //step3:check if there are any errors
    var validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.render("new_product", { errormsg: validationErrors.array()[0] });
    } else {
        next();
    }
};

export default validateRequest;