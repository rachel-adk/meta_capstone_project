import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";


export default function MapView({ hospitals, center}) {
  if (!center) return null;

  return (
    <MapContainer
      center={[center.latitude, center.longitude]}
      zoom={13}
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* marker for user's location */}
      <Marker position={[center.latitude, center.longitude]}>
        <Popup>You are here!</Popup>
      </Marker>

      {/* Hospital markers */}
      {hospitals.map((h, index) => (
        <Marker key={index} position={[h.latitude, h.longitude]}>
          <Popup>
            <strong>{h.name}</strong>
            <br />
            {h.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
