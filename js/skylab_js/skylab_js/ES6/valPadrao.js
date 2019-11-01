function soma(a, b = 3) {
  return a + b;
}
console.log(soma(1));

const soma1 = (a = 4, b = 3) => a + b;
console.log(soma1());
