// requisitar informacoes do servidor sem precisar recarregar as paginas
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/thomasdantas");
xhr.send(null);
// requisicao assincrona

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    //4 porque é quando terminou de carregar
    console.log(JSON.parse(xhr.responseText));
  }
};
