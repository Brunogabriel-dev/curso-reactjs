export default function jsx4() {
  const subtitulo = "Estou no JavaScript!"

  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitulo}</h2>
      <h3>{3 * 3}</h3>
      <h4>{Math.max(13, 39)}</h4>
    </div>
  )
}

function entre(valor, min, max) {
  if(valor && valor )  {
      return "Sim"
  } else {
    return "Não"
  }
}