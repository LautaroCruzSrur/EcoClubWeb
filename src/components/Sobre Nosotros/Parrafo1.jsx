import React from "react";

export const Parrafo1 = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        Un Espacio para la Conexión con la Naturaleza
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        ECOClub no es solo un club social, sino un punto de encuentro para quienes buscan disfrutar del aire libre, realizar actividades recreativas y fortalecer su vínculo con el entorno natural. Entre sus principales atractivos, se destacan:
      </p>
      
      <ul className="text-left list-disc pl-6 max-w-2xl mx-auto space-y-3 text-gray-700">
        <li>
          <strong>Áreas verdes y senderos ecológicos:</strong> Espacios diseñados para caminatas y paseos en un ambiente libre de contaminación.
        </li>
        <li>
          <strong>Actividades deportivas y recreativas:</strong> Desde ciclismo y senderismo hasta yoga y meditación al aire libre.
        </li>
        <li>
          <strong>Eventos y talleres educativos:</strong> Jornadas de concientización ambiental, reciclaje y actividades para toda la familia.
        </li>
        <li>
          <strong>Zona de camping y descanso:</strong> Ideal para aquellos que buscan una experiencia de desconexión y relajación.
        </li>
      </ul>
    </div>
  );
};
