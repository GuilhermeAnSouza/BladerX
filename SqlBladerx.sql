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
    fkUsuario int,
		foreign key (fkUsuario) references usuario(id), 
    fkBeyUsuario int,
		foreign key (fkBeyUsuario) references beyUsuario(idBey)
);


select * from pecas;


create table rounds (
idRound int primary key auto_increment,
fkBey1 int,
	foreign key (fkBey1) references beyUsuario(idBey),
fkBey2 int,
	foreign key (fkBey2) references beyUsuario(idBey),
fase int,
ganhador varchar(45),
perdedor varchar(45),
dtRound DATETIME DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE rounds 
ADD COLUMN dtRound DATETIME DEFAULT CURRENT_TIMESTAMP;

alter table rounds add column dtRound datetime; 

select * from rounds;

select * from beyUsuario;

insert into beyUsuario (fkUsuario) values (2);

insert into pecas (nome, abraviacao ,tipo, fkUsuario, fkBeyUsuario) values 
('Achilles','∀','GatinkoChip',2,4 ),
('Gou','轟','LayerWeights',2,4 ),
('Ace','A','LayerBase',2,4 ),
('Around','Ar','Disk',2,4 ),
('Charge','Ch','Driver',2,4 );

insert into pecas (nome, abraviacao ,tipo, fkUsuario, fkBeyUsuario) values 
('Achilles','∀','GatinkoChip',2,1 ),
('Gou','轟','LayerWeights',2,1 ),
('Ace','A','LayerBase',2,1 ),
('Around','Ar','Disk',2,1 ),
('Charge','Ch','Driver',2,1 ),
('Ashura','A','GatinkoChip',2,2 ),
('Metsu','滅','LayerWeights',2,2 ),
('Bushin','B','LayerBase',2,2 ),
('Ratchet','Rt','Disk',2,2 ),
('Keep','Kp','Driver',2,2 ),
('Generate','Gn','Driver',2,null),
('Erase','E','LayerBase',2,null);

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
