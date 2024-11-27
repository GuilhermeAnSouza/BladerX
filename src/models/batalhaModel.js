var database = require("../database/config"); // Pega as configurações do banco de dados


function listarHistorico(fkUsuario) {
    var instrucao = `SELECT r.fkBey1, r.fkBey2, r.dtRound 
FROM rounds AS r
JOIN beyUsuario AS bu ON r.fkBey1 = bu.idBey
JOIN usuario AS u ON bu.fkUsuario = u.id
WHERE u.id = ${fkUsuario}
ORDER BY r.idRound DESC;`; // Consulta SQL para listar as peças
    return database.executar(instrucao);
}

function adicionar(fkBey1, fkBey2, ganhador, perdedor) {
    var instrucaoSql = `
        INSERT INTO rounds (fkBey1, fkBey2, ganhador, perdedor) 
        VALUES ('${fkBey1}', '${fkBey2}','${ganhador}','${perdedor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarHistorico,
    adicionar // Para outros arquivos poderem usar a função
};
