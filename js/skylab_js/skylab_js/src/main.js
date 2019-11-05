import api from "./api";

class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById("repo-form");
    this.inputEL = document.querySelector("input[name=repository");
    this.formUl = document.getElementById("repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    // registrar eventos
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando"));
      loadingEl.setAttribute("id", "loading");

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById("loading").remove();
    }
  }

  async addRepository(event) {
    //adicionar um novo repositorio
    event.preventDefault();

    const repoInput = this.inputEL.value;
    if (repoInput.length === 0) return;

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);
      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.repositories.push({
        name: name,
        description: description,
        avatar_url: avatar_url,
        html_url: html_url
      });

      this.inputEL.value = "";

      this.render();
    } catch (err) {
      alert("o repositorio nao existe");
    }

    this.setLoading(false);
  }
  render() {
    // apaga todo conteudo da lista e renderiza do 0
    this.formUl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptEl = document.createElement("p");
      descriptEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptEl);
      listItemEl.appendChild(linkEl);

      this.formUl.appendChild(listItemEl);
    });
  }
}

new App();
