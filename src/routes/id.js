var express = require("express");
var router = express.Router();
var idController = require("../controllers/idController");

// Rota para listar peças
router.get("/listar", idController.listar);