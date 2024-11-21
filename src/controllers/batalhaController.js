var batalhaModel = require("../models/batalhaModel"); // Para refenciar o pecasModel

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

function adicionar(req, res) {
    // fkBey1, fkBey2, fkCampeonato, fase, ganhador, perdedor
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // nome, abraviacao, tipo, fkBeyUsuario
    var fkBey1 = req.body.fkBey1Server;
    var fkBey2 = req.body.fkBey2Server;
    var fkCampeonato = req.body.fkCampeonatoServer;
    var fase = req.body.faseServer;
    var ganhador = req.body.ganhadorServer
    var perdedor = req.body.perdedorServer

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pecasModel.adicionar(fkBey1, fkBey2, fkCampeonato, fase,ganhador,perdedor  )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = { // criando funcao listar baseado na funcao listarPecas para outras páginas usarem
    listar,
    adicionar
};
