import { useState } from "react"

export default function mouse() {
const arrayX = useState(0)
const X = arrayX[0]
const alterarX = arrayX[0]


  let x = 0
  let y = 0

  const estilo = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#222",
      color: "#fff",
      height: "100vh"
  }

  function quandoMover(ev) {
    x = ev.clientX
    y = ev.clientY
    console.log('valor alterado')
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>

    </div>
  )
}