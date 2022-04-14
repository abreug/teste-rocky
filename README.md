# teste-rocky
Teste seletivo para a empressa Rocky.monks

Questões: 
Para esse projeto, você utilizará o arquivo broken-database.json (disponível aqui) e irá fazer uma série de transformações até que ele volte ao formato original. Para isso será necessário desenvolver algumas funções e depois verificar se realmente foi recuperado. Você deverá utilizar JavaScript para resolver esse problema, caso não conheça nenhuma dessas linguagens, é uma ótima oportunidade para aprender! :) 
Recuperação dos dados originais do banco de dados 
Você deverá criar uma função para ler o arquivo broken-database.json e criar três funções para percorrer o banco de dados corrompido e corrigir os três erros descritos anteriormente, além de uma função para exportar um arquivo .json com a saída.
Portanto serão 5 funções: 

Ler o arquivo Json;
Corrigir nomes; 
Corrigir preços; 
Corrigir quantidades; 
Exportar um arquivo JSON com o banco corrigido;

Implementar e entregar as quatro funções em um mesmo arquivo ‘resolucao.js’ para correção. Enviar também para correção um arquivo no formato JSON com o banco de dados corrigido, ou seja, após passar pelas três funções de correção. 
 Validação do banco de dados corrigido 
 
Você deverá implementar funções para validar a sua recuperação do banco de dados. Todas essas funções deverão ter como input o seu banco de dados corrigido na questão 1. As funções de validação são: 
a) Uma função que imprime a lista com todos os nomes dos produtos, ordenados primeiro por categoria em ordem alfabética e ordenados por id em ordem crescente. Obs: é apenas uma saída, ordenada pelos dois fatores citados acima.
b) Uma função que calcula qual é o valor total do estoque por categoria, ou seja, a soma do valor de todos os produtos em estoque de cada categoria, considerando a quantidade de cada produto. 
Essas funções também devem estar no arquivo ‘resolucao.js’.
