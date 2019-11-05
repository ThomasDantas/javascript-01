const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

// 2.1 utilizando o map
const newArray = usuarios.map(function(item) {
  return item.idade;
});
console.log(newArray);

//2.2 utilizando o metodo filter
const filtro = usuarios.filter(function(item) {
  return item.idade > 18;
});
console.log(filtro);

// 2.3 utilizando o find
const find = usuarios.find(function(item) {
  return item.empresa == "Google";
});
console.log(find);

// 2.4 unindo operacoes
const somaIdades = usuarios.map(function(item) {
  return item.idade * 2;
});
console.log(somaIdades);

const filtroIdade = somaIdades.filter(function(item) {
  return item < 50;
});
console.log(filtroIdade);
