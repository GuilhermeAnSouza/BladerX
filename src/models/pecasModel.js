var database = require("../database/config");; // Importa o arquivo de configuração do banco

function listarPecas() {
    var instrucao = "SELECT * FROM pecas"; // Consulta SQL para listar as peças
    return database.executar(instrucao);
}

module.exports = {
    listarPecas // Exporta a função
};
