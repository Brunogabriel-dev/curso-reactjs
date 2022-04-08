import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {
  const [numero, setNumero] = useState(0)

  const dec = () => setNumero(numero - 1)

  return (
    <div>
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <button onClick={dec}>-</button>
      <button onClick={() => setNumero(numero + 1)}>+</button>
    </div>
  )
}