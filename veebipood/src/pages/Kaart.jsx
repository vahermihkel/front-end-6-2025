import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


function Kaart() {
  return (
    <div>
      <MapContainer style={{height: "300px"}} center={[59.434, 24.751]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={[59.434, 24.751]}>
          <Popup>
            Solarise keskus. <br /> Lahtiolekuaeg 8-22
          </Popup>
        </Marker>
        <Marker position={[59.421, 24.792]}>
          <Popup>
            Ülemiste keskus. <br /> Lahtiolekuaeg 10-22
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Kaart

// Pange App.jsx faili   <Route path="kaart" element={<Kaart />}
// Pange Menu.jsx faili   <Link to="/kaart">Kaart</Link>