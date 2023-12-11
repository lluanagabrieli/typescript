"use strict";
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
