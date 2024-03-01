import express from "express";
import path from "path";
import bodyParser from "body-parser";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";
import ProductController from "./src/controllers/product.controller.js";
import UserController from "./src/controllers/user.controller.js";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import swaggerjsdoc from "swagger-jsdoc";
import { auth } from "./src/middlewares/auth.middleware.js";
import { uploadFile } from "./src/middlewares/file_upload.middleware.js";
import { setlastVisite } from "./src/middlewares/lastVisit.middleware.js";
const server = express();
const port = 8080 || process.env.PORT;
//set view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// create instance of productcontroller
const productController = new ProductController();
const userController = new UserController();
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "My APP",
      description: "Costom api",
      contact: {
        name: "Suraj",
      },
      servers: ["http://localhost:8080"],
    },
  },
  apis: ["index.js"],
};

const swaggerDoc = swaggerjsdoc(swaggerOptions);
server.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
//set layout
server.use(ejsLayouts);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static("src/views"));
server.use(express.static("public"));
server.use(
  session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
server.use(cookieParser());

//implementin swagger

/**
 * @Swagger
 *  /home
 *   GET:
 *    disciption: It gets home page
 *   response:
 *     "200":
 *         discription: home page sent successfully
 */
server.get("/home", (req, res) => {
  return res.status(200).send("Welcome");
});

//end of swagger

//authentication
server.get("/register", userController.getRegister);
server.get("/login", userController.getLogin);
server.post("/register", userController.postRegister);
server.post("/login", userController.postLogin);
server.get("/", auth, productController.getProducts);
server.get("/new", auth, productController.getAddForm);
server.post(
  "/",
  auth,
  uploadFile.single("imageUrl"),
  productController.addProducts
);
server.get("/update_product/:id", auth, productController.getUpdateProductView);
server.post("/update_product", auth, productController.updateProductPost);
server.post("/delete_product/:id", auth, productController.deleteProduct);
server.get("/logout", userController.getLogout);

server.listen(port, (err) => {
  if (err) console.log("Error listening to server: " + err);
  else console.log(`SERVER listening on port ${port} `);
});
