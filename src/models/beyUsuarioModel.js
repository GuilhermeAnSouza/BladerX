var database = require("../database/config"); // Pega as configurações do banco de dados

function adicionar(fkUsuario) {
    var instrucao = `INSERT INTO beyUsuario (fkUsuario) values ('${fkUsuario}')
    `;
    return database.executar(instrucao);
}

module.exports = {
    adicionar // Para outros arquivos poderem usar a função
};
