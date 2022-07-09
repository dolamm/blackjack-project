const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const myCasinoController = require("./controllers/MyCasinoController");
const AuthController = require("./controllers/AuthController");
const ItemController = require("./controllers/ItemController");
const CategoryController = require("./controllers/CategoryController");
const dbConnection = require("./config/database");

const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.post("/login", AuthController); //login
app.post("/register", AuthController); //register

app.post("/my-casino", myCasinoController); //retrieve data from database to MyCasino screen
app.post("/my-casino/upgrade", myCasinoController); //upgrade casino level and update the database

app.get("/store", ItemController);
app.get("/store/category/:id", ItemController);
app.get("/category", CategoryController);
app.get("/useritem/:id", ItemController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

module.exports.app = app;
