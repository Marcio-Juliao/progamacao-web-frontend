# Exercícios – Métodos de Vetor em JavaScript

## 1. Lista de Compras
- a) Solicite o nome do item e a quantidade que será comprada;  
- b) Ao clicar em **"Adicionar à lista"**, armazene o item em um vetor e exiba `99x de NOME_DO_PRODUTO adicionado com sucesso!`;  
- c) Ao clicar em **"Exibir lista"**, mostre todos os itens cadastrados com suas quantidades, um abaixo do outro.  

**OBS:** obrigatoriamente use vetor.

---

## 2. Cadastro de Livros
- a) O usuário informa o título do livro e o autor;  
- b) Ao clicar em **"Cadastrar"**, o livro é adicionado a um vetor de objetos;  
- c) Ao clicar em **"Exibir livros"**, liste todos os livros cadastrados.  

**OBS:** use métodos de vetor como `push()` e `forEach()`.

---

## 3. Ranking de Jogos
- a) O usuário informa o nome do jogo e a pontuação;  
- b) Ao clicar em **"Adicionar"**, cadastre no vetor;  
- c) Ao clicar em **"Mostrar ranking"**, exiba os jogos ordenados da maior para a menor pontuação;  
- d) Mostre o jogo com maior pontuação.  

**OBS:** utilize `push()`, `sort()` e `at()`.

---

## 4. Controle de Estoque
- a) O usuário informa o produto e a quantidade em estoque;  
- b) Ao clicar em **"Adicionar produto"**, armazene em um vetor;  
- c) Permita filtrar produtos com quantidade menor que um valor informado pelo usuário;  
- d) Exiba os produtos filtrados em uma lista.  

**OBS:** use `push()`, `filter()` e `forEach()`.

---

## 5. Lista de Exercícios Físicos
- a) O usuário informa o nome do exercício e a quantidade de repetições;  
- b) Ao clicar em **"Adicionar"**, adicione no vetor;  
- c) Ao clicar em **"Exibir exercícios"**, mostre todos os exercícios cadastrados;  
- d) Permita ordenar os exercícios por quantidade de repetições.  

**OBS:** use `push()`, `sort()` e `forEach()`.

---

## 6. Cadastro de Receitas
- a) O usuário informa o nome da receita e tempo de preparo;  
- b) Ao clicar em **"Cadastrar"**, adicione no vetor;  
- c) Ao clicar em **"Filtrar por tempo"**, exiba apenas as receitas com tempo menor ou igual ao informado;  
- d) Mostre a lista filtrada abaixo do botão.  

**OBS:** use `push()`, `filter()` e `forEach()`.

---

## 7. Lista de Contatos
- a) O usuário informa o nome e o telefone do contato;  
- b) Ao clicar em **"Adicionar contato"**, armazene em um vetor;  
- c) Ao clicar em **"Exibir contatos"**, liste todos em ordem alfabética;  
- d) Permita remover um contato pelo nome.  

**OBS:** use `push()`, `toSorted()` e `splice()`.

---

## 8. Registro de Pesos
- a) O usuário informa o peso diário;  
- b) Ao clicar em **"Adicionar peso"**, registre no vetor;  
- c) Ao clicar em **"Exibir histórico"**, mostre todos os pesos;  
- d) Permita calcular a média dos pesos cadastrados.  

**OBS:** use `push()`, `reduce()` e `forEach()`.

---

## 9. Lista de Filmes por Gênero
- a) O usuário informa o nome do filme e o gênero;  
- b) Ao clicar em **"Cadastrar"**, armazene em vetor de objetos;  
- c) Ao clicar em **"Filtrar por gênero"**, mostre apenas os filmes do gênero selecionado.  

**OBS:** use `push()`, `filter()` e `forEach()`.

---

## 10. Sistema de Votação de Atividades
- a) O usuário seleciona uma atividade favorita (ex: corrida, natação, yoga);  
- b) Ao clicar em **"Votar"**, adicione o voto no vetor;  
- c) Ao clicar em **"Resultado"**, mostre a quantidade de votos para cada atividade;  
- d) Exiba a atividade mais votada com uma frase especial.  

**OBS:** use `push()`, `reduce()`, `map()` e `forEach()`.

---

## 11. Sistema de Controle de Notas com Ranking
- a) O usuário cadastra alunos com nome e nota final;  
- b) Armazene os alunos em um vetor de objetos `{ nome, nota }`;  
- c) Ao clicar em **"Exibir aprovados"**, o programa deve:  
  - Filtrar alunos com nota ≥ 6 (`filter`)  
  - Ordenar do maior para o menor nota (`sort`)  
  - Exibir apenas os nomes e notas formatados (`map`)  
  - Mostrar a lista abaixo do botão.  
- **Desafio adicional:** Mostrar a média das notas aprovadas usando `reduce()`.  

**OBS:** use `push()`, `filter()`, `sort()`, `map()`, `reduce()`.

---

## 12. Lista de Produtos com Estoque e Preço
- a) O usuário informa produtos com nome, preço e quantidade Vem estoque;  
- b) Armazene os produtos em um vetor de objetos com nome, preço e quantidade;  
- c) Ao clicar em **"Produtos em promoção"**, o programa deve:  
  - Filtrar produtos com preço menor que um valor informado (`filter`)  
  - Aplicar um desconto de 10% no preço de cada produto fi
