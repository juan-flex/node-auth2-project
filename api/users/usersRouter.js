const router = require("express").Router();

const Users = require("./usersModel.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json({ users, decodedToken: req.decodedToken });
    })
    .catch(err => res.send(err));
});

module.exports = router;