import './App.css'
import { NavBar } from './components/NavBar'
import { Slider } from './components/Galery/Slider'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Parrafo1 } from './components/Sobre Nosotros/Parrafo1'
import { Parrafo2 } from './components/Sobre Nosotros/Parrafo2'
import { Parrafo3 } from './components/Sobre Nosotros/Parrafo3'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <NavBar />

      <main className="flex flex-col flex-grow items-center gap-6 md:gap-10 lg:gap-14 px-4 py-6 md:py-10 lg:py-14 w-full">
        
        {/* Párrafo 1 */}
        <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 bg-green-200 p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
          <Parrafo1 />
        </div>

        {/* Slider Responsivo */}
        <div className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4">
          <Slider />
        </div>

        {/* Párrafo 2 */}
        <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 bg-yellow-200 p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
          <Parrafo2 />
        </div>

        {/* Párrafo 3 */}
        <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 bg-blue-200 p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
          <Parrafo3 />
        </div>

      </main>

      <Footer />

      {/* Botón de WhatsApp (Responsivo) */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
        <WhatsAppButton />
      </div>
      
    </div>
  )
}

export default App
