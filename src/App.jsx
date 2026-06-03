import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      
      <main id="center">
        <Hero />
        
        <div id="next-steps">
          <Card 
            titulo="Etiqueta <div>" 
            descripcion="Es un contenedor de bloque genérico utilizado para agrupar elementos." 
          />
          <Card 
            titulo="Etiqueta <p>" 
            descripcion="Representa un párrafo de texto en la página." 
          />
          <Card 
            titulo="Etiqueta <a>" 
            descripcion="Define un hipervínculo o enlace hacia otras páginas." 
          />
        </div>

      </main>

      <Footer />
    </>
  )
}

export default App