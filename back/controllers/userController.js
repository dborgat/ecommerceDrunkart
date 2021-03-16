const User = require("../models/User"); // ver chicos!!
const Cart = require("../models/Trolley");
const userController = {
  //register
  create(req, res, next) {
    User.create(req.body)
      .then((newUser) => {
        Cart.create({
          user: newUser._id,
        });
        res.status(201).send(newUser);
      })
      .catch(next);
  },
  //login
  login(req, res, next) {
    res.status(202).send(req.user);
  },
  edit(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body)
      .then((userUpdated) => {
        res.status(201).send(userUpdated);
      })
      .catch(next);
  }, /// COMO HACER QUE NO PUEDA MODIFICAR EL ADMIN ROL (USER NORMAL)
  delete(req, res, next) {
    User.findByIdAndDelete(req.params.id)
      .then(() => (deletedUser) => res.send(deletedUser + "BORRADO"))
      .catch(next);
  },
  logout(req, res, next) {
    req.logOut();
    res.sendStatus(200);
  },
  private(req, res, next) {
    if (!req.user) {
      return res.sendStatus(401);
    }
    res.status(200).send(req.user);
  },
};
module.exports = userController;
