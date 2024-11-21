CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;

create table beyUsuario (
	idBey int primary key auto_increment,
    fkUsuario int,
		foreign key (fkUsuario) references usuario(id),
	winrate float,
    ativo char(3)
    );
    
select * from beyUsuario;
    
create table pecas (
	idPecas int primary key auto_increment,
    nome varchar(45),
    abraviacao varchar(45),
    tipo varchar(45),
    qtd int,
    fkBeyUsuario int,
		foreign key (fkBeyUsuario) references beyUsuario(idBey)
);

select * from pecas;

create table campeonato (
idCampeonato int primary key auto_increment,
fases int
);

select * from campeonato;

create table rounds (
fkBey1 int,
	foreign key (fkBey1) references beyUsuario(idBey),
fkBey2 int,
	foreign key (fkBey2) references beyUsuario(idBey),
fkCampeonato int,
	foreign key (fkCampeonato) references campeonato(idCampeonato),
fase int,
ganhador varchar(45),
	primary key (fkBey1, fkBey2, fkCampeonato),
perdedor varchar(45)
);

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

select * from pecas join BeyUsuario
	where fkUsuario = 2;

insert into pecas (nome, abraviacao ,tipo, qtd, fkBeyUsuario) values 
('Hydra','H','GatinkoChip',1,null );


select b.idBey, p.* from pecas as p join beyUsuario as b
	on fkBeyUsuario = idBey;
    
select * from beyUsuario;

SELECT * FROM usuario;

select * from pecas;

alter table usuario add column cpf char (11);

use aquatech;
