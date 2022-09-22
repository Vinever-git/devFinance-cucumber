Feature: Finance

Como usuario, desejo inserir valores
Para contabilizar minhas financias


Scenario: Obter o valor total após uma entrada e saida de valores
    Given que eu acesso a aplicação finaceira
    When desejo cadastrar a entrada do meu "salario" com a data "2022-09-20" e valor "1000"
    And desejo cadastrar saida do "aluguel" com a data "2022-09-21" e valor "-500"
    Then o valor do meu saldo e "500"