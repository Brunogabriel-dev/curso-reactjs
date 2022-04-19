import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {

  const [numeros, setNumeros] = useState(mega())


 function renderizarNumeros() {
   return numeros.map(
     numero => <NumeroDisplay key={numero} numero={numero} />)
 }



  return (
    <div style={{
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      
      }}>
      <h1>Mega Sena</h1>
      <div style={{display: "flex"}}>
        {renderizarNumeros()}
      </div>
      <div>
        <input type="number" min={6} max={20} />
        <button onClick={() => setNumeros(mega())}>
          Gerar Aposta
        </button>
      </div>
    </div>
  )
}