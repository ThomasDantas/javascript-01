var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");
var listElement = document.querySelector("#app ul");

btnElement.onclick = function() {
  var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        "https://api.github.com/users/" + inputElement.value + "/repos"
      );
      xhr.send(null);

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve();
          } else {
            reject("erro");
          }
        }
      };
    });
  };

  minhaPromise()
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
