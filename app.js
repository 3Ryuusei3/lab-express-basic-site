const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "views/partials"));

// DDBB
require("./db/db-connections");

app.use(express.static(path.join(__dirname, "/public")));

// MODEL
const Product = require("./models/product.model");

app.get("/", (req, res) => {
	res.render("index-page");
});

app.get("/tienda", (req, res) => {
	Product.find()
		.sort({ price: 0 }) // ordena
		.select({ title: 1, price: 1, thumbnail: 1 })
		.then((allProducts) => {
			/* console.log(allProducts),  */ res.render("tienda", { products: allProducts });
		})
		.catch((err) => console.log(err));
});

app.listen(5005, () => console.log("Working"));
