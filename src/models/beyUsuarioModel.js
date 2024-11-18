var database = require("../database/config"); // Pega as configurações do banco de dados

function listarBeys() {
    var instrucao = "SELECT * FROM beyUsuario"; // Consulta SQL para listar as peças
    return database.executar(instrucao);
}

module.exports = {
    listarBeys // Para outros arquivos poderem usar a função
};
