import { useRef, useState } from "react"
import ArraysHome from "./ArraysHome"
import andmed from "../../data/autod.json"
import { Link } from "react-router-dom";
// import ostukorvFailist from "../../data/ostukorv.json"

// renderdamine --> HTMLi esialgne väljakuvamine
// re-renderdamine --> HTMLi uuesti kuvamine useState-i setteri abiga

// key-sid läheb vaja re-renderdamisel. renderdamisel pannakse key'd külge, 
//                                          kogu HTML jäetakse meelde
// re-renderdamisel, et vaeva vähendada (et ei peaks kogu HTMLi otsast peale uuesti läbi käima),
//    võetakse mälukohad ja array'l tuleb mälukohad manuaalselt panna key= abiga

function Autod() {
  const [autod, setAutod] = useState(andmed.slice());
  const otsingRef = useRef();

  const otsi = () => {
    const vastus = andmed.filter(auto => auto.nimi.includes(otsingRef.current.value));
    setAutod(vastus);
  }

  // kui on tähestiku järgi sorteerimine: localeCompare
  // kui on numbrite sorteerimine: üks miinus teine

  const reset = () => {
    setAutod(andmed.slice());
  }

  const sorteeriAZ = () => {
    autod.sort((a,b) => a.nimi.localeCompare(b.nimi));
    setAutod(autod.slice());
  }

  const sorteeriZA = () => {
    autod.sort((a,b) => b.nimi.localeCompare(a.nimi));
    setAutod(autod.slice());
  }

  const sorteeriTahedKasv = () => {
    autod.sort((a,b) => a.nimi.length - b.nimi.length);
    setAutod(autod.slice());
  }

  const sorteeriTahedKah = () => {
    autod.sort((a,b) => b.nimi.length - a.nimi.length);
    setAutod(autod.slice());
  }

  const sorteeriKolmasTahtAZ = () => {             // 012
    autod.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2])); // Ferrari
    // autod.sort((a,b) => a.at(2).localeCompare(b.at(2))); 
    // autod.sort((a,b) => a.charAt(2).localeCompare(b.charAt(2))); 
    setAutod(autod.slice());
  }

  const filtreeriSisaldabLyhenditER = () => {
    const vastus = andmed.filter(auto => auto.nimi.includes("er"));
    setAutod(vastus);
  }

  const filtreeriIgaLoppevad = () => {
    const vastus = andmed.filter(auto => auto.nimi.endsWith("i"));
    setAutod(vastus);
  }

  const filtreeriTapselt8Tahelised = () => {
    const vastus = andmed.filter(auto => auto.nimi.length === 8);
    setAutod(vastus);
  }

  const filtreeriVah8Tahelised = () => {
    const vastus = andmed.filter(auto => auto.nimi.length >= 8);
    setAutod(vastus);
  }

  const filtreeriTeineTahtE = () => {
    const vastus = andmed.filter(auto => auto.nimi[1] === "e");
   //const vastus = autod.filter(auto => true); <--- jätab kõik alles
    setAutod(vastus);
  }

  const muudaSuurteksTahtedeks = () => {
    //const vastus = autod.map(auto => auto); <-- muudab kõik samaks
    // const vastus = autod.map(auto => ({nimi: auto.nimi.toUpperCase(), hind: auto.hind, aktiivne: auto.aktiivne, pilt: auto.pilt}));
    const vastus = andmed.map(auto => ({...auto, nimi: auto.nimi.toUpperCase()}));
    setAutod(vastus);
    // ...auto ---> jäta auto seest kõik ülejäänud asjad samaks, aga mis on temast paremal,
    //              neid muuda.
  }

  // autod.sort((a,b) => -1); <--- ei tee mitte midagi, sest miinusmärgiga nr ei vaheta järjekorda

// .push(uus_väärtus) --> lisab lõppu
// .splice(index, 1) --> kustutab
// .sort((a,b) => PLUSS/MIINUSMÄRK) --> koguse samaks, muudab järjekorda
// .filter(element => TRUE/FALSE) --> kogus väheneb
// .map(element => UUS_VÄÄRTUS) --> kogus sama, järjekord sama, AGA muudab igaüht

  const lisaOstukorvi = (toode) => {
    // ostukorvFailist.push(toode);
    const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
    ostukorvLS.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
  }

  const arvutaKokku = () => {
    let summa = 0;
    autod.forEach(auto => summa = summa + auto.hind);
    return summa;
  }

  // kui kodus teete LS arendust ja läheb kogemata trükiveaga midagi localStorage-sse, siis
  // tuleb LS tühjendada: 
  // parem klõps -> inspect -> application -> local storage -> parem klõps + delete

  return (
    <div>
      <div>Autode hinnad kokku: {arvutaKokku()} €</div>
      <input ref={otsingRef} onChange={otsi} type="text" />
      <br />
      <button onClick={reset}>Reset</button>
      <ArraysHome />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähemärgid kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähemärgid kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
      <br /><br />
      <button onClick={filtreeriSisaldabLyhenditER}>Jäta alles -er- lühendit sisaldavad</button>
      <button onClick={filtreeriIgaLoppevad}>Jäta alles -i- tähega lõppevad</button>
      <button onClick={filtreeriTapselt8Tahelised}>Jäta alles täpselt 8 tähelised</button>
      <button onClick={filtreeriVah8Tahelised}>Jäta alles vähemalt 8 tähelised</button>
      <button onClick={filtreeriTeineTahtE}>Jäta alles kellel teine täht -e-</button>
      <br /><br />
      <button onClick={muudaSuurteksTahtedeks}>Muuda kõik autonimed suurteks tähtedeks</button>

      <div>Autode arv: {autod.length} tk</div>
      <div className="autod">
        {autod.map(auto => 
        <div className="auto" key={auto.nimi}>
          <div className="nimi">{auto.nimi}</div>
          <div className="hind">{auto.hind}€</div>
          <div><img className={auto.aktiivne ? "pilt" : "pilt-mitteaktiivne"} src={auto.pilt} alt="" /></div>
          <div>{auto.aktiivne ? <button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button> : <p><i>Toode pole aktiivne</i></p>}</div>
          <Link to={"/auto/" + auto.nimi}>
            <button>Vt lähemalt</button>
          </Link>
        </div>)}
      </div>
    </div>
  )
}

export default Autod