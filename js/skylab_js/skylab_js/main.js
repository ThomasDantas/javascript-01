class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super(); //chama constructor da classe Pai

    this.usuario = "thomas";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById("novo_todo").onclick = function() {
  MinhaLista.add("Novo Todo");
};

MinhaLista.mostraUsuario();

//metodo static soma
class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 5));
