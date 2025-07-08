import { useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"

function YksEsindus() {
  // <Route path="/esindus/:pood" element={<YksEsindus />} />
  const { pood } = useParams(); // võtab URLi muutuja väärtuse
  const leitud = esindusedFailist.find(esindus => esindus.keskus === pood);

// "", 0, {}, [] --> tühjad väärtused
// undefined, null --> tühjus

  if (leitud === undefined) {
    return <div>Esindust ei leitud</div>
  }

  return (
    <div>
      <div>{leitud.keskus}</div>
      <div>{leitud.tel}</div>
      <div>{leitud.aadress}</div>
    </div>
  )
}

export default YksEsindus