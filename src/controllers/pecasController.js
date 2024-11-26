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

function adicionar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // nome, abraviacao, tipo, fkBeyUsuario
    var nome = req.body.nomeServer;
    var abraviacao = req.body.abraviacaoServer;
    var tipo = req.body.tipoServer;
    var fkBeyUsuario = req.body.fkBeyUsuarioServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pecasModel.adicionar(nome, abraviacao, tipo, fkBeyUsuario)
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

    function montar(req, res) {
        var { idPeca, fkBeyUsuario } = req.body;
    
        pecasModel.montar(idPeca, fkBeyUsuario)
            .then(() => {
                res.status(200).send("Peça atribuída ao combo com sucesso!");
            })
            .catch((erro) => {
                console.error("Erro ao montar peça:", erro);
                res.status(500).json({ erro: "Erro ao montar peça" });
            });
    }

        function desmontar(req, res) {
            var idPecas = req.body.idPecasServer; // Recupera o ID da peça
        
            pecasModel.desmontar(idPecas)
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
    adicionar,
    montar,
    desmontar
};
