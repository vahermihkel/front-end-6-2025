import HaldaHome from "./HaldaHome"
import esindusedJSON from "../../data/esindused.json"
import { useRef, useState } from "react"

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedJSON.slice());
  const esindusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();
  const [unikaalne, setUnikaalne] = useState(true);

  const lisa = () => {
    if (esindusRef.current.value === "") {
      alert("Tühja nimega ei saa lisada!");
      return;
    }

    esindusedJSON.push({
      "keskus": esindusRef.current.value, 
      "tel": telefonRef.current.value, 
      "aadress": aadressRef.current.value
    });
    setEsindused(esindusedJSON.slice());
    // alumised read teevad vormi inputid tühjaks
    esindusRef.current.value = "";
    telefonRef.current.value = "";
    aadressRef.current.value = "";
  }

  const kustuta = (index) => {
    esindusedJSON.splice(index,1);
    setEsindused(esindusedJSON.slice());
  }

  const kasUnikaalne = () => {
    const vastus = esindusedJSON.find(esindus => esindus.keskus === esindusRef.current.value);
    if (vastus === undefined) {
      setUnikaalne(true);
    } else {
      setUnikaalne(false);
    }
  }

  return (
    <div>
      <HaldaHome />
      {unikaalne === false && <div className="red">Keskuse nimi peab olema unikaalne</div>}
      <label>Esinduse nimi</label> <br />
      <input onChange={kasUnikaalne} ref={esindusRef} type="text" /> <br />
      <label>Esinduse telefon</label> <br />
      <input ref={telefonRef} type="text" /> <br />
      <label>Esinduse aadress</label> <br />
      <input ref={aadressRef} type="text" /> <br />
      <button disabled={unikaalne === false} onClick={lisa}>Sisesta</button> <br />

      <div>Esindusi: {esindused.length} tk</div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Esinduse asukoht</th>
            <th>Esinduse telefon</th>
            <th>Esinduse aadress</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {esindused.map((esindus, index) => 
          <tr key={esindus.keskus}>
            <td>{index}</td>
            <td>{esindus.keskus}</td>
            <td>{esindus.tel}</td>
            <td>{esindus.aadress}</td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaEsindused