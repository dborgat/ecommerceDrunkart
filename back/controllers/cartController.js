const Cart = require("../models/Trolley");
const Product = require("../models/Product");
const User = require("../models/User");
const chalk = require("chalk");

const cartController = {
  findAll(req, res, next) {
    User.findById(req.user._id).then((userFound) => {
      Cart.findOne({ user: userFound._id }) //El carrito se crea junto con el usuario
        .populate("product")
        .then((cartPopulated) => {
          console.log(chalk.blue(cartPopulated));
          res.status(200).send(cartPopulated);
        })
        .catch(next);
    });
  },

  addToCart(req, res, next) {
    console.log(chalk.blue(req.body.user));
    User.findById(req.user._id) //Busco el usuario
      .then((userFound) => {
        Cart.findOne({ user: userFound._id }) //Busco el carrito de ese usuario
          .then((cartToPush) => {
            Product.findById({ _id: req.params.id }) //Busco el producto para agregar
              .then((product) => {
                cartToPush.product.push(product);
                cartToPush.total = cartToPush.product.length;
                cartToPush.save();
                res.status(204).send(cartToPush);
              });
          });
      });
  },

  deleteFromCart(req, res, next) {
    User.findById(req.user._id).then((userFound) => {
      Cart.findOne({ user: userFound._id })
        .then((cartToFilter) => {
          Product.findById({ _id: req.params.id }).then((productToFilter) => {
            cartToFilter.product = cartToFilter.product.filter(
              (product) => product != productToFilter //[birra1, birra1, birra1, birra2, birra3]
            );
            cartToFilter.total = cartToFilter.product.length; //
            cartToFilter.save();
            console.log(chalk.blue(cartToFilter));
            res.status(204).send(cartToFilter);
          });
        })
        .catch(next);
    });
  },
};

module.exports = cartController;
