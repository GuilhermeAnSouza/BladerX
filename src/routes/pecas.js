var express = require("express");
var router = express.Router();
var pecasController = require("../controllers/pecasController");

// Rota para listar peças
router.get("/listar", pecasController.listar); // O caminho da função do controller que faz referencia ao model

module.exports = router;
