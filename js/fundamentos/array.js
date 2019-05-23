// heterogêneo, nao tem tamanho fixo

const valores = [7, 9, 5, 3, 4, 5, 7, 2, 34, 5]

console.log(valores)
console.log(valores[3])
console.log(valores.length)
valores.push({ id: 3 })
console.log(valores)
console.log(valores.pop())
//retorna o ultimo e remove o mesmo
console.log(valores)
console.log(typeof valores)