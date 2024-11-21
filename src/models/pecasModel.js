var database = require("../database/config"); // Pega as configurações do banco de dados

function listarPecas() {
    var instrucao = "SELECT * FROM pecas"; // Consulta SQL para listar as peças
    return database.executar(instrucao);
}

function adicionar(nome, abraviacao, tipo, fkBeyUsuario) {
    var instrucaoSql = `
        INSERT INTO pecas (nome, abraviacao, tipo, fkBeyUsuario) 
        VALUES ('${nome}', '${abraviacao}', '${tipo}', ${fkBeyUsuario === null ? "NULL" : `'${fkBeyUsuario}'`});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarPecas,
    adicionar // Para outros arquivos poderem usar a função
};
