
let nome = "Diogo Felipe";
let idade = 25;

// CONCATENAÇÃO
console.log("Nome: " + nome + ", idade: " +idade);

// INTERPOLAÇÃO
console.log(`Nome: ${nome}, idade: ${idade}`)

console.log(typeof nome);
console.log(typeof idade);

// OPERADORES RELACIONAIS

//  VALIDA IGUALDADE DE VALOR
// "10" == 10 -> true

// VALIDA IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false

// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1: eegqrq
//             break;
// }

// ESTRUTURA DE REPETIÇÃO

let frutas = ["Maçã", "Banana", "Acerola", "Uva"]

console.log(frutas);

frutas.forEach(function(fruta) {
    console.log("Nome: " + fruta)
})

frutas.forEach(fruta => console.log("Nome: " + fruta)) 