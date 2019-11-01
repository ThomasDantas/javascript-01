// REST
const usuario = {
  nome: "thomas",
  idade: "20",
  empresa: "paipe"
};

const { nome, ...resto } = usuario;
console.log(nome); // apenas o nome
console.log(resto); //assume todo o resto do objeto

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
  return params;
}
console.log(soma(1, 2, 3, 4, 5));

function soma1(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma1(1, 2, 3, 4, 5));

function soma2(a, b, ...params) {
  return params;
}
console.log(soma2(1, 2, 3));

//SPREAD - passar de um array para uma estrutura de dados

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
  nome: "thomas",
  idade: 20,
  empresa: "empresa"
};
const usuario2 = { ...usuario1, nome: "guilherme" };
console.log(usuario2);
