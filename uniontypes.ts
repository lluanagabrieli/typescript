// funções podem receber ou retornar tipos diferentes. Para isso usamos a barra vertical string | number | boolean.

// let total: string | number = 200; //pode receber string ou números
// total = 300;

// console.log(typeof total);

// Funções podem receber parâmetros com diferentes tipos e também podem retornar diferentes tipos de dados.
// a função abaixo recebe um tipo string ou number e retorna um tipo booleano.
// é preferível retornar o mesmo tipo de dado na função para não dar possíveis erros
// function isNumber(value: string | number) {
//   if (typeof value === "number") {
//     return true;
//   } else {
//     return false;
//     // return "Não é número";  - não é preferível
//   }
// }
// if (isNumber("200")) {
//   console.log("É um número.");
// }

// //o ts não consegue verificar o que tem no nosso arquivo HTML e nem sabe o que existe nesse DOM. Não tem como ele saber se esse button existe ou não, então ele me retorna um elemento ou NULL.
// const botao = document.querySelector("button");

// if (botao) {
//   botao.click();
// }
// // opção mais moderna do ts - Optional chaining
// botao?.click(); // só vai ser ativado o click caso o botao seja diferente de null ou undefined. Só vai continuar se for um HTMLButtonElement

// EXERCICIO
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    return Number(value);
  } else {
    throw "value deve ser um número ou uma string";
  }
}
console.log(toNumber(200));
