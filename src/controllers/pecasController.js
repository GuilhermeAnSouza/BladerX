var pecasModel = require("../models/pecasModel"); // Para refenciar o pecasModel

function listar(req, res) { // Pega a função do pecasModel para criar a função listar, para colocar os dados em um JSON
    pecasModel.listarPecas()
        .then(function (resultados) {
            res.status(200).json(resultados); // 200 Significa que deu certo 
        })
        .catch(function (erro) {
            console.error("Erro ao listar peças:", erro);
            res.status(500).json({ erro: "Erro ao buscar as peças" }); // 500 significa que deu ruim
        });
}

module.exports = { // criando funcao listar baseado na funcao listarPecas para outras páginas usarem
    listar
};
