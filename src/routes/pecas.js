var express = require("express");
var router = express.Router();
var pecasController = require("../controllers/pecasController");

// Rota para listar peças
router.get("/listar", pecasController.listar);

module.exports = router;
