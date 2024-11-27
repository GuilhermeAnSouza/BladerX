var database = require("../database/config"); // Pega as configurações do banco de dados


function listarPecas(fkUsuario) {
    var instrucao = `SELECT * FROM pecas
                        where fkUsuario = ${fkUsuario}`; // Consulta SQL para listar as peças
    return database.executar(instrucao);
}

function adicionar(nome, abraviacao, tipo, fkUsuario ,fkBeyUsuario) {
    var instrucaoSql = `
        INSERT INTO pecas (nome, abraviacao, tipo, fkUsuario ,fkBeyUsuario) 
        VALUES ('${nome}', '${abraviacao}', '${tipo}',${fkUsuario} ,${fkBeyUsuario})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function montar(idPecas, fkBeyUsuario) {
    var instrucaoAtualizar = `
        UPDATE pecas 
        SET fkBeyUsuario = ${fkBeyUsuario} 
        WHERE idPecas = ${idPecas};
    `;
    console.log("Executando SQL: " + instrucaoAtualizar);
    return database.executar(instrucaoAtualizar);
}

function desmontar(idPecas){
    var instrucaoAtualizar = `
        UPDATE pecas SET fkBeyUsuario = null
            WHERE idPecas = ${idPecas} `    
    return database.executar(instrucaoAtualizar)
}

module.exports = {
    listarPecas,
    adicionar, // Para outros arquivos poderem usar a função
    montar,
    desmontar
};
