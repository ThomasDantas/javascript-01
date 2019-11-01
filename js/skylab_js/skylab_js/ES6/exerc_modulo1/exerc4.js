// desestruturacao de parametros
// 4.1
const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2
function mostraInfo(usuario) {
  const { nome, idade } = usuario;
  console.log(`${nome} tem ${idade} anos`);
  return `${nome} tem ${idade} anos`;
}
mostraInfo({ nome: "thomas", idade: 20 });
