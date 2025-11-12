-- 1) listar todos os veículos que estão com status "em manutenção"
-- SELECT STATUS FROM VEICULO
-- WHERE STATUS = 'EM MANUTENÇÃO';

-- 2) exibir nome dos motoristas e viagens que realizaram, mostrando destino e distância
-- SELECT M.NOME AS MOTORISTA, V.DESTINO, V.KM_PERCORRIDO AS DISTâNCIA
-- FROM MOTORISTA M, VIAGEM V
-- WHERE M.COD_MOTORISTA = V.COD_MOTORISTA;

-- 3) total de ocorrencias registradas por viagens
-- SELECT V.DESTINO AS VIAGEM, COUNT(O.COD_OCORRENCIA) AS TOTAL_OCORRENCIAS
-- FROM VIAGEM V, OCORRENCIA O
-- WHERE V.COD_VIAGEM = O.COD_VIAGEM
-- GROUP BY (V.DESTINO);

-- 4) quilometragem média dos veículos disponíveis
-- SELECT AVG(QUILOMETRAGEM) AS QUILOMETRAGEM_MEDIA FROM VEICULO
-- WHERE STATUS = 'DISPONÍVEL';

-- 5) listar viagens com distância superior a 500km em ordem decrescente
-- SELECT * FROM VIAGEM
-- WHERE KM_PERCORRIDO > 500
-- ORDER BY KM_PERCORRIDO DESC;
