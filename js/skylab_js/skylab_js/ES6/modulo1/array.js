const arr = [1, 3, 5, 6, 8, 9];

const newArr = arr.map(function(item, index) {
  return item + index; // index sao as posicoes
});
console.log(newArr);
// map, percorre o vetor e retornar algum valor

const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);
// reduce, consumir todo vetor e transformar em uma unica informacao

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter); //mostra apenas os pares

const find = arr.find(function(item) {
  return item === 5;
});
console.log(find);
