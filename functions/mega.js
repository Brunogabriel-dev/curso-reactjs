export default function mega(qtde = 6) {
  if(qtde < 6 && qtde > 60) {
    throw "Quantidade inválida!"
  }
}


console.log(mega())