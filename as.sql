CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

create table beyUsuario (
	idBey int primary key auto_increment,
    fkUsuario int,
		foreign key (fkUsuario) references usuario(id),
	winrate float
    );
    
create table pecas (
	idPecas int primary key auto_increment,
    nome varchar(45),
    abraviacao varchar(45),
    tipo varchar(45),
    qtd int,
    fkBeyUsuario int,
		foreign key (fkBeyUsuario) references beyUsuario(idBey)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);
insert into beyUsuario (fkUsuario) values (2), (2);
insert into pecas (nome, abraviacao ,tipo, qtd, fkBeyUsuario) values 
('Achilles','∀','GatinkoChip',1,1 ),
('Gou','轟','LayerWeights',1,1 ),
('Ace','A','LayerBase',1,1 ),
('Around','Ar','Disk',1,1 ),
('Charge','Ch','Driver',1,1 ),
('Ashura','A','GatinkoChip',1,2 ),
('Metsu','滅','LayerWeights',1,2 ),
('Bushin','B','LayerBase',1,2 ),
('Ratchet','Rt','Disk',1,2 ),
('Keep','Kp','Driver',1,2 ),
('Generate','Gn','Driver',1,null),
('Erase','E','LayerBase',1,null);


select b.idBey, p.* from pecas as p join beyUsuario as b
	on fkBeyUsuario = idBey;
    
select * from beyUsuario;

SELECT * FROM usuario;

alter table usuario add column cpf char (11);

use aquatech;
