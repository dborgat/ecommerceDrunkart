const Category = require("../models/Category");
const Product = require("../models/Product");

const categoryController = {
  findAll(req, res, next) {
    Category.find({})
      .populate("product")
      .then((categories) => res.status(200).send(categories))
      .catch(next);
  },

  findByName(req, res, next) {
    Category.findOne({ name: req.params.name }).then((category) => {
      Product.find({ category: category._id })
        .populate("category")
        .then((category) => {
          res.send(category);
        })
        .catch(next);
    });
  },
};

module.exports = categoryController;