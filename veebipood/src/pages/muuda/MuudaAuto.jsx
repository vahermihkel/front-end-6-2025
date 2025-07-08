import { useNavigate, useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"
import { useRef } from "react";

function MuudaAuto() {
  const { index } = useParams();
  const leitud = autodFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    if (nimiRef.current.value === "") {
      alert("Tühja nimega ei saa sisestada!")
      return;
    }

    if (hindRef.current.value === "") {
      alert("Tühja hind ei saa sisestada!")
      return;
    }

    if (piltRef.current.value === "") {
      alert("Tühja pilt ei saa sisestada!")
      return;
    }

    autodFailist[index] = {
      "nimi": nimiRef.current.value, 
      "hind": hindRef.current.value, 
      "aktiivne": aktiivneRef.current.checked, // checkbox kas on linnutatud --> true 
      "pilt": piltRef.current.value
    }

    navigate("/halda-autod");
  }

  return (
    <div>
      <label>Auto nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud.nimi} type="text" /> <br />
      <label>Auto hind</label> <br />
      <input ref={hindRef} defaultValue={leitud.hind} type="text" /> <br />
      <label>Auto pilt</label> <br />
      <input ref={piltRef} defaultValue={leitud.pilt} type="text" /> <br />
      <label>Auto aktiivne</label> <br />
      <input ref={aktiivneRef} defaultChecked={leitud.aktiivne} type="checkbox" /> <br />
      {/* <Link to="/halda-autod"> <--- ei saa teha, sest suunab ikka iga kord ära */}
        <button onClick={muuda}>Muuda</button>
      {/* </Link> */}
    </div>
  )
}

export default MuudaAuto