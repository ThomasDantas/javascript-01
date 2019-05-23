//valores numericos

const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

const avali1 = 9.23
const avali2 = 7.22

const total = avali1 * peso1 * avali2 * peso2;
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)); // arruma as casas decimais para dois depois do ponto .tofixed
console.log(media.toString(2)); // para para valor binario
console.log(typeof media); // mostra o tipo

// ---------------------------------------------------------------------------------------------
// ALGUNS CUIDADOS COM NUMERICOS

console.log(typeof Number); // mostra o tipo
console.log(7 / 0);
console.log('10' / 2);




