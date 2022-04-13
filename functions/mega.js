export function mega(qtde = 6, numeros = []) {
  if(qtde < 6 && qtde > 60) {
    throw "Quantidade inválida!"
  }

  if(numeros.length === qtde) {
    return numeros
  }

  const numerosAleatorios = paseInt(Math.random() * 60) + 1
  if(!numeros.includes(numerosAleatorio)) {
    return mega(qtde, [...numeros])
  }
}


console.log(mega())