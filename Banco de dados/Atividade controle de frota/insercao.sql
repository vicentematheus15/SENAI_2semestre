-- Populando VEICULO (10 registros)
INSERT INTO VEICULO (PLACA, MODELO, ANO_FAB, QUILOMETRAGEM, STATUS) VALUES
('ABC1234', 'Fiat Uno', 2015, 85000.5, 'DISPONÍVEL'),
('DEF5678', 'Volkswagen Gol', 2018, 62000.0, 'EM MANUTENÇÃO'),
('GHI9012', 'Ford Ka', 2017, 73000.3, 'DISPONÍVEL'),
('JKL3456', 'Chevrolet Onix', 2020, 40000.7, 'DISPONÍVEL'),
('MNO7890', 'Hyundai HB20', 2019, 55000.4, 'FORA DE OPERAÇÃO'),
('PQR2345', 'Renault Sandero', 2016, 78000.2, 'DISPONÍVEL'),
('STU6789', 'Toyota Corolla', 2014, 95000.1, 'DISPONÍVEL'),
('VWX1239', 'Honda Civic', 2021, 25000.8, 'EM MANUTENÇÃO'),
('YZA4567', 'Jeep Renegade', 2019, 47000.6, 'DISPONÍVEL'),
('BCD8901', 'Nissan Versa', 2018, 63000.0, 'DISPONÍVEL');

-- Populando MOTORISTA (9 registros)
INSERT INTO MOTORISTA (NOME, CNH, CIDADE_ORIGEM) VALUES
('Carlos Silva', '123456789', 'São Paulo'),
('Ana Paula', '987654321', 'Rio de Janeiro'),
('João Souza', '234567891', 'Belo Horizonte'),
('Mariana Costa', '345678912', 'Curitiba'),
('Pedro Alves', '456789123', 'Porto Alegre'),
('Luciana Moraes', '567891234', 'Salvador'),
('Ricardo Lima', '678912345', 'Brasília'),
('Fernanda Rocha', '789123456', 'Fortaleza'),
('Gustavo Pinto', '891234567', 'Recife');

-- Populando TELEFONE (10 registros, distribuídos entre motoristas)
INSERT INTO TELEFONE (NUM_TEL, COD_MOTORISTA) VALUES
('11987654321', 1),
('11912345678', 1),
('21987654321', 2),
('31987654321', 3),
('41987654321', 4),
('51987654321', 5),
('61987654321', 6),
('71987654321', 7),
('81987654321', 8),
('91987654321', 9);

-- Populando VIAGEM (8 registros)
INSERT INTO VIAGEM (DATA_SAIDA, DESTINO, KM_PERCORRIDO, COD_VEICULO, COD_MOTORISTA) VALUES
('2025-09-01', 'Rio de Janeiro', 450, 1, 1),
('2025-09-03', 'Curitiba', 320, 2, 2),
('2025-09-05', 'Porto Alegre', 600, 3, 3),
('2025-09-07', 'Salvador', 850, 4, 4),
('2025-09-10', 'Brasília', 700, 5, 5),
('2025-09-12', 'Fortaleza', 900, 6, 6),
('2025-09-14', 'Recife', 750, 7, 7),
('2025-09-16', 'Belo Horizonte', 400, 8, 8);

-- Populando OCORRENCIA (9 registros)
INSERT INTO OCORRENCIA (TIPO, DESCRICAO, COD_VIAGEM) VALUES
('ACIDENTE', 'Pequeno acidente na rodovia, sem feridos.', 1),
('MANUTENÇÃO', 'Troca de óleo e filtros.', 2),
('ATRASO', 'Trânsito intenso causou atraso de 2 horas.', 3),
('ACIDENTE', 'Colisão leve no estacionamento.', 4),
('MANUTENÇÃO', 'Revisão dos freios.', 5),
('ATRASO', 'Chuva forte dificultou a viagem.', 6),
('ACIDENTE', 'Abalroamento lateral na estrada.', 7),
('MANUTENÇÃO', 'Substituição de pneus.', 8),
('ATRASO', 'Parada para descanso mais longa que o previsto.', 1);