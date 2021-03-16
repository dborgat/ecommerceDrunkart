const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router
  .get("/", cartController.findAll)
  .post("/:id", cartController.addToCart) // agregar producto por ID
  .delete("/:id", cartController.deleteFromCart); //Borra un articulo

module.exports = router;
