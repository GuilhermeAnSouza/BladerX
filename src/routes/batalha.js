var express = require("express");
var router = express.Router();
var batalhaController = require("../controllers/batalhaController");

// Rota para listar peças
router.get("/listar/:id", batalhaController.listar); // O caminho da função do controller que faz referencia ao model

router.post("/adicionar", function (req, res) {
    batalhaController.adicionar(req, res);
});
module.exports = router;
