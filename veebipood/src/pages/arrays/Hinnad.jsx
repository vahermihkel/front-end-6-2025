import { useRef, useState } from "react"
import ArraysHome from "./ArraysHome"
import hinnadFailist from "../../data/hinnad.json"
import { Link } from "react-router-dom";

function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const otsingRef = useRef();

  const otsi = () => {
    const vastus = hinnadFailist.filter(hind => hind.number.toString().includes(otsingRef.current.value));
    setHinnad(vastus);
  }

  function reset() {
    setHinnad(hinnadFailist.slice());
  }

  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a.number - b.number);
    //setHinnad([...hinnad]); chatGPT pakub koguaeg seda
    setHinnad(hinnad.slice()); // on täpselt sama. mälukoha ära lõikamine
  }

  function sorteeriKahanevalt() {
    hinnad.sort((a, b) => b.number - a.number);
    setHinnad(hinnad.slice());
  }

  function filtreeriSuuremadKui40() {
    const vastus = hinnad.filter(hind => hind.number > 40);
    setHinnad(vastus);
  }

  function filtreeriVaiksemadKui60() {
    const vastus = hinnad.filter(hind => hind.number < 60);
    setHinnad(vastus);
  }

  const arvutaKokku = () => {
    let summa = 0;
    // summa = summa + 44;
    // summa = summa + 9;
    // summa += 12;
    // summa = summa + 3;
    // variant1:
    // for (let index = 0; index < hinnad.length; index++) {
    //   summa = summa + hinnad[index].number;
    // }
    // variant2:
    // for (let hind of hinnad) {
    //   summa = summa + hind.number;
    // }
    // variant3:
    hinnad.forEach(hind => summa = summa + hind.number);

    return summa; // returni järgne läheb HTMLi
  }

  // käima tõmbamine: onClick, onChange jne
  // kui on   onChange={() => otsi()}   siis peab seda käima tõmbama
  // kui on   onClick={reset}   siis peab seda käima tõmbama
  // kui on   <div>{arvutaKokku()}</div> siis läheb koheselt käima


  return (
    <div>
      <ArraysHome />
      <div>Kõikide hindade summa on: {arvutaKokku()} €</div>
      <input ref={otsingRef} onChange={otsi} type="text" />
      <br />
      <button onClick={reset}>Reset</button>
      <div>Hindade arv {hinnad.length} tk</div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriSuuremadKui40}>Jäta alles suuremad kui 40</button>
      <button onClick={filtreeriVaiksemadKui60}>Jäta alles väiksemad kui 60</button>
      {hinnad.map((hind, index) => 
        <div key={hind.number}>
          {hind.number} ({hind.sonana})
          <Link to={"/hind/" + index}>
            <button>Vt lähemalt</button>
          </Link>
        </div>)}
    </div>
  )
}

export default Hinnad