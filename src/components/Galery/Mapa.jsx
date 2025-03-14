import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [-26.636098, -65.216480];

export const Mapa = () => {
  return (
    <MapContainer center={position} zoom={15} className="w-full h-96 rounded-lg shadow-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Ubicación seleccionada</Popup>
      </Marker>
    </MapContainer>
  );
};


