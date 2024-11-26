var express = require("express");
var router = express.Router();
var pecasController = require("../controllers/pecasController");

// Rota para listar peças
router.get("/listar", pecasController.listar); // O caminho da função do controller que faz referencia ao model

router.post("/adicionar", function (req, res) {
    pecasController.adicionar(req, res);
});

router.put("/montar", pecasController.montar);
router.put("/desmontar", pecasController.desmontar);


module.exports = router;
