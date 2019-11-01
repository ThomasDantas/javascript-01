const arr = [1, 3, 5, 6, 8, 9];

const newArr = arr.map(item => item * 2);
// quando for um elemento e por exemplo for algo simples, é possivel fazer desta forma
console.log(newArr);
// map, percorre o vetor e retornar algum valor

const teste = () => {
  return "teste";
};
console.log(teste());

const teste1 = () => "teste1";
console.log(teste1());

const testObjetc = () => ({ nome: "thomas" }); // para objeto
console.log(testObjetc());
