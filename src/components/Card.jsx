import { useState } from 'react'

const Card = ({ titulo, descripcion }) => {
  const [oculto, setOculto] = useState(false)
  const [colorFondo, setColorFondo] = useState('transparent')

  const cambiarEstiloCard = () => {
    if (colorFondo === 'transparent') {
      setColorFondo('var(--accent-bg)') 
    } else {
      setColorFondo('transparent')   
    }
  }

  return (
    <div style={{ backgroundColor: colorFondo }}>
      <h3>{titulo}</h3>
      
      {!oculto && <p>{descripcion}</p>}
      
      <button className="counter" onClick={() => setOculto(!oculto)}>
        {oculto ? 'Mostrar Info' : 'Ocultar Info'}
      </button>

      <button className="counter" onClick={cambiarEstiloCard}>
        Cambiar Estilo
      </button>
    </div>
  )
}

export default Card