var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");

btnElement.onclick = function() {
  function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
      idade = inputElement.value;
      parseFloat(idade);
      if (idade >= 18) {
        resolve();
      } else {
        reject();
      }
    });
  }

  checaIdade(inputElement.value)
    .then(function() {
      setTimeout(function() {
        console.log("maior que 18 anos");
      }, 1000);
    })
    .catch(function() {
      console.log("menor que 18 anos");
    });
};
