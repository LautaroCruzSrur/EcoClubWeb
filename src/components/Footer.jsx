import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Mapa } from "./Galery/Mapa";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-green-800 text-white py-6 px-6 pb-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
      
      {/* Contenedor de texto y redes */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-sm md:text-base">
          © 2021 ECOClub. Todos los derechos reservados.
        </p>

        {/* Iconos de redes sociales */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://www.instagram.com/ecoclubtuc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-gray-300 transition-colors"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.facebook.com/ecoclubtucuman?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-gray-300 transition-colors"
          >
            <BsFacebook />
          </a>
        </div>
      </div>

      {/* Contenedor del Mapa - Más pequeño y alineado a la derecha */}
      <div className="flex justify-end w-full md:w-auto md:mr-20">
        <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-lg shadow-lg overflow-hidden ">
          <Mapa />
        </div>
      </div>

    </footer>
  );
};
