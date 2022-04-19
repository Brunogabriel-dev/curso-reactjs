import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {

  const [numeros, setNumeros] = useState(mega())


 function renderNumeros() {
   return numeros.map(
     numero => <NumeroDisplay key={numero} numero={numero} />)
 }

  return (
    <div>
      <h1>Mega Sena</h1>
      <div>
        {renderizarNumeros()}
      </div>
    </div>

  )
}