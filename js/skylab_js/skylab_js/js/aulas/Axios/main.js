axios
  .get("https://api.github.com/users/thomasdantas") // get metodo
  .then(function(response) {
    console.log(response);
  })
  .catch(function(reject) {
    console.warn(reject);
  });
