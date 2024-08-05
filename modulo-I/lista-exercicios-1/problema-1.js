// Verifique se um número é positivo, negativo ou zero
// Escreva um programa que leia um número e use uma estrutura `if` para verificar se o número é positivo,
//negativo ou zero.Imprima uma mensagem apropriada para cada caso.

const prompt = require('prompt-sync')()

let num = Number(prompt("Insira um numero: "))

let positivo = num >= 0;

if (positivo) {
  console.log("O numero inserido é positivo")
} else {
  console.log('O numero inserido é negativo');
}