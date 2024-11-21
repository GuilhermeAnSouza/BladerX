var database = require("../database/config"); // Pega as configurações do banco de dados

function listarHistorico() {
    var instrucao = "SELECT * FROM rounds"; // Consulta SQL para listar as peças
    return database.executar(instrucao);
}

function partida(fkBey1, fkBey2, fkCampeonato, fase, ganhador, perdedor) {
    var instrucaoSql = `
        INSERT INTO rounds (fkBey1, fkBey2, fkCampeonato, fase, ganhador, perdedor) 
        VALUES ('${fkBey1}', '${fkBey2}', '${fkCampeonato}', '${fase}','${ganhador}','${perdedor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarHistorico,
    partida // Para outros arquivos poderem usar a função
};
