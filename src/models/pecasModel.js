var database = require("../database/config"); // Pega as configurações do banco de dados

function listarPecas() {
    var instrucao = "SELECT * FROM pecas"; // Consulta SQL para listar as peças
    return database.executar(instrucao);
}

module.exports = {
    listarPecas // Para outros arquivos poderem usar a função
};
