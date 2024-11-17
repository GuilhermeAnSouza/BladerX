var pecasModel = require("../models/pecasModel");

function listar(req, res) {
    pecasModel.listarPecas()
        .then(function (resultados) {
            res.status(200).json(resultados); // Retorna os resultados em formato JSON
        })
        .catch(function (erro) {
            console.error("Erro ao listar peças:", erro);
            res.status(500).json({ erro: "Erro ao buscar as peças" });
        });
}

module.exports = {
    listar
};
