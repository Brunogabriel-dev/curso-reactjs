import { useState } from "react"

export default function contador() {
  const [numero, setNumero] = useState(0)

  const inc = () => setNumero(numero + 1)

  return (
    <div>
      <h1>Contador</h1>
      <div>Valor: {numero}</div>
      <button onClick={dec}>-</button>
      <button onClick={() => setNumero(numero + 1)}>+</button>
    </div>
  )
}