export function mega(qtde = 6, numeros = []) {
  if(qtde < 6 && qtde > 60) {
    throw "Quantidade inválida!"
  }

  if(numeros.length === qtde) {
    return numeros
  }
}


console.log(mega())