var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");
var listElement = document.querySelector("#app ul");

btnElement.onclick = function() {
  axios
    .get("https://api.github.com/users/" + inputElement.value + "/repos") // get metodo
    .then(function(response) {
      for (repo of response.data) {
        console.log(repo.full_name);
        var lista = document.createElement("li");
        var nomesLista = document.createTextNode(repo.full_name);
        lista.appendChild(nomesLista);

        listElement.appendChild(lista);
      }
    })
    .catch(function(reject) {
      console.warn(reject);
    });
};
