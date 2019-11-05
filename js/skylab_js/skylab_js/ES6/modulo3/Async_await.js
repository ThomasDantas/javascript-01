const minhaPromise = () =>
  new Promise((resolve, rejecet) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });

// minhaPromise().then(response => {
//   console.log(response);
// });

async function executaPromise() {
  // async antes da funcao vira uma promise
  const response = await minhaPromise(); // proxima linha apenas executa apos essa finalizar
  console.log(response);
}
executaPromise();

const asyncArrow = async () => {
  console.log(await minhaPromise());
};
asyncArrow();
