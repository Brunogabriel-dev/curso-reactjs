import { useState } from "react"

export default function contador() {
  const [numero, setNumero] = useState(0)

  function inc() {
    setNumero(numero + 1)

  }

  function dec() {
    setNumero(numero - 1)

  }

  return (
    <div>
      <h1>Contador</h1>
      <div>Valor: {numero}</div>
      <button>-</button>
      <button>+</button>
    </div>
  )
}