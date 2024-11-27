var beyUsuarioModel = require("../models/beyUsuarioModel");

function adicionar(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    beyUsuarioModel.adicionar(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado); // Responde com JSON
        })
        .catch(function (erro) {
            console.error("Erro ao adicionar beyUsuario:", erro);
            res.status(500).json({ erro: "Erro ao adicionar beyUsuario" });
        });
}

module.exports = {
    adicionar,
};
