const validateRequest = (req, res, next) => {
  //adding validation
  let errormsg = [];
  const { name, price, imageUrl } = req.body;
  if (!name || !price || !imageUrl) {
    errormsg.push("Feilds cannot be empty");
  } else if (parseFloat(price) < 1) {
    errormsg.push("Cannot enter nagative price");
  } else if (name.trim() == "") {
    errormsg.push("cannot use this name");
  }
  try {
    const validurl = new URL(imageUrl).toString();
  } catch (err) {
    errormsg.push("Invalid URL");
  }

  if (errormsg.length > 0) {
    return res.render("new_product", { errormsg: errormsg });
  } else {
    next();
  }
};

export default validateRequest;
