const usuario = {
  nome: "thomas",
  idade: "20",
  endereco: {
    cidade: "rio do sul",
    estado: "sc"
  }
};

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
// console.log(nome, idade, cidade);

// desestruturacao
const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}
mostraNome(usuario);
