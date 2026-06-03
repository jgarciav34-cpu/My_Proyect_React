import { useState } from 'react'

const Hero = () => {
  const [titulo, setTitulo] = useState('Soy Joseph Garcia Vera')
  const [contador, setContador] = useState(0)

  const manejarCambioTitulo = () => {
    if (titulo === 'Soy Joseph Garcia Vera') {
      setTitulo('Y esta es mi pagina web con react')
    } else {
      setTitulo('Soy Joseph Garcia Vera')
    }
  }

  return (
    <div className="hero">
      <h1>{titulo}</h1>
      <p>HOLA MUNDO</p>
      
      <button className="counter" onClick={manejarCambioTitulo}>
        Cambiar Título
      </button>

      <div>
        <p>Valor del contador: <code>{contador}</code></p>
        <button className="counter" onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button className="counter" onClick={() => setContador(contador - 1)}>Decrementar</button>
      </div>
    </div>
  )
}

export default Hero