// class List {
//   constructor() {
//     this.data = [];
//   }

//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super(); //chama constructor da classe Pai

//     this.usuario = "thomas";
//   }

//   mostraUsuario() {
//     console.log(this.usuario);
//   }
// }

// var MinhaLista = new TodoList();

// document.getElementById("novo_todo").onclick = function() {
//   MinhaLista.add("Novo Todo");
// };

// MinhaLista.mostraUsuario();

// //metodo static soma
// class Matematica {
//   static soma(a, b) {
//     return a + b;
//   }
// }

// console.log(Matematica.soma(1, 5));

// "dev": "babel ./main.js -o ./bundle.js -w"

// import { soma } from "./funcoes";
// import somaFunction from "./soma"; // nao precisa das chaves, pq é export default
// import { sub as subtracao } from "./funcoes"; // renomear com as

// import * as funcoes from "./funcoes"; // importa todas as funcoes do arquivo funcoes.js
// console.log(funcoes);
// console.log(funcoes.mult(5, 5));

// console.log(somaFunction(5, 22));
// console.log(subtracao(7, 3));

// alert("testando"); live Reloading

//axios
// import axios from "axios";

// class Api {
//   static async getUserInfo(username) {
//     try {
//       const response = await axios.get(
//         `https://api.github.com/users/${username}`
//       );
//       //   console.log(response);
//     } catch (err) {
//       console.warn("erro na API");
//     }
//   }
// }
// Api.getUserInfo("thomasdantas");

//exercicios modulo 3
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
  await delay(); // proxima linha apenas executa apos essa finalizar
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("3s");
}
umPorSegundo();

// 3.1

import axios from "axios";
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log("errou");
  }
}

getUserFromGithub("diego3g");
getUserFromGithub("diego3g124123");

// 3.2
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log("errado dnv");
    }
  }
}
Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("rocketseat/dslkvmskv");

// 3.3
const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
};
buscaUsuario("diego3g");
