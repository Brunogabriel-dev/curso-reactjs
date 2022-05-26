export function Comp1() {
  return (
    <div>
      <h2>Comp #01</h2>
    </div>
  ) 
}

export const Comp2 = function() {
  return <h2>Comp #02</h2>
}

export default function () {
  return (
    <div>
      <h2>Comp #03</h2>
    </div>
  )
}

export const Comp4 = () => {
  return <h2>Comp #04</h2>
}

export const Comp5 = () => <h2>Comp #05</h2>

export const Comp6 = () => (
  <div>
    <h2>Comp #06</h2>
  </div>
)