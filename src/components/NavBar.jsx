import React from 'react'

export const NavBar = () => {
  return (
    <nav className="w-screen bg-green-800 text-white p-3 flex flex-row items-center">
        {/* Logo al 25% del navbar */}
        <div className="w-1/4 flex items-center justify-center">
            <img src="/Logo1.png" alt="logo" className="w-32 h-auto object-contain" />
        </div>
        
        {/* Lista de navegación al 75% */}
        <ul className="w-3/4 flex flex-row justify-around list-none">
            <li className='m-3 cursor-pointer hover:text-gray-300'>Inicio</li>
            <li className='m-3 cursor-pointer hover:text-gray-300'>Galeria</li>
            <li className='m-3 cursor-pointer hover:text-gray-300'>Sobre Nosotros</li>
            <li className='m-3 cursor-pointer hover:text-gray-300'>Contacto</li>
        </ul>
    </nav>
  )
}
