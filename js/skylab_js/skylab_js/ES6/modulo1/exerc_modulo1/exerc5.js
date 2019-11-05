// rest
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(2, 3, 5, 6, 7, 4, 55));

// Spread
const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = {
  ...usuario,
  nome: "gabriel"
};

const usuario3 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: "lontras" }
};
console.log(usuario3);
