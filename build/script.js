"use strict";
//erros que seriam pegos pelo TS -  //@ts-check
/* let produto: string = "livro";
let preco: number = 200;
//preco = '300';

const carro: {
  //objeto é do tipo objeto {}
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

//nesses casos acima não são necessárias as annotations porque o TS já faz a inferência corretamente. Elas serão necessárias quando lidamos com funções.

function somar(a: number, b: number) {
  return a + b;
}

function somar(a: number, b: number) {
  return `${a + b}`;
} //essa função me retorna uma string

function mudarNome(user: { nome: string; idade: number }) {
  user.nome = user.nome + " Gabrieli";
  return user;
}

const usuario = {
  nome: "Luana",
  idade: 24,
};

const userNovo = mudarNome(usuario);
console.log(userNovo);

EXERCÍCIO 1
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto("Hello! My name is Luana Gabrieli."));

// ============ EXERCICIO 2 ============

const input = document.querySelector("input"); //seleção do elemento input

if (input) {
  input.addEventListener("keyup", function () {
    localStorage.setItem("total", input.value); //localstorage só aceita string, por isso só deixamos o input.value, sem transformá-lo para number. Sintaxe do localStorage: ["nome", valor: String]
    calcularGanho(Number(input.value));
    // const value = Number(input.value);
    // localStorage.setItem("total", value);
    // calcularGanho(value);
  });
}
// input.addEventListener("keyup", totalMudou); nesse trecho ele reclama que o input pode ser nulo. Se não tiver um input no html, ele quebra toda a aplicação. Por isso é importante fazermos a verificação através do if.

function calcularGanho(value: number) {
  const p = document.querySelector("p"); //pegando meu elemento paragrafo

  if (p) {
    //fazendo a verificação para caso não haja um p e não quebre a aplicação.
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

const total = localStorage.getItem("total"); //pegando o item que está salvo no localStorage do Browser

if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
  // input.value = total;
  // calcularGanho(input.value);
}*/
// TYPEOF - operador do JS que retorna uma string com o tipo do dado.
// pode retornar: string, number, boolean, function, object, undefined, bigint e symbol.
// tipos primitivos(básicos) do ts
const frase = "Front End";
const preco = 500;
const condi = preco > 100;
if (typeof frase === "string") {
    console.log("frase é uma string");
}
if (typeof preco === "number") {
    console.log("preco é um number");
}
if (typeof condi === "boolean") {
    console.log("condi é um boolean");
}
//String, Number e Boolena é diferente de string, number e boolean. São funcões construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos dos mesmos.
const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
