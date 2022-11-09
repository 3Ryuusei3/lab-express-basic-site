const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: "No description available now.",
	},
	price: {
		type: Number,
		min: 0,
	},
	discountPercentage: {
		type: Number,
		min: 0,
		max: 100,
	},
	rating: {
		type: Number,
		min: 1,
		max: 5,
	},
	stock: {
		type: Number,
		min: 1,
	},
	brand: {
		type: String,
		default: "Unknown brand",
	},
	category: {
		type: String,
		default: "General",
	},
	thumbnail: {
		type: String,
		default: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
	},
	images: {
		type: Array,
	},
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
