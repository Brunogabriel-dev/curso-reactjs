export default function Filho(props) {
  //
  console.log(props.funcao)
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.funcao}>Falar com o Pai #1</button>
      <button onClick={() => props.funcao("Passei no ENEM!")}>Falar com o Pai #2</button>
    </div>
  )
}