var express = require("express");
var router = express.Router();
var beyUsuarioController = require("../controllers/beyUsuarioController");

router.post("/adicionar", beyUsuarioController.adicionar);

module.exports = router;
