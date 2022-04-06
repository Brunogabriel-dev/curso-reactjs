export default function mouse() {
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
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>

    </div>
  )
}