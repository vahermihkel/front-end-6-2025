import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();

  const sisesta = () => {
    // if (emailRef.current.value === "") {
    //   alert("Tühja emaili ei saa sisestada!");
    // } else {
    //   alert("Email sisestatud!");
    // }

    // emailRef.current.value === "" ?
    //   alert("Tühja emaili ei saa sisestada!"):
    //   alert("Email sisestatud!");

    if (emailRef.current.value === "") {
      toast.error("Tühja emaili ei saa sisestada!");
      return; // lõpetab funktsiooni
    }

    if (emailRef.current.value.includes("@") === false) {
      toast.error("Ilma @ märgita ei saa sisestada!");
      return; // lõpetab funktsiooni
    }
      
    toast.success("Email sisestatud!");
  }

  return (
    <div>
      <button className={summa === 20 ? "summa-aktiivne" : undefined} onClick={() => setSumma(20)}>20€</button>
      <button className={summa === 50 ? "summa-aktiivne" : undefined} onClick={() => setSumma(50)}>50€</button>
      <button className={summa === 100 ? "summa-aktiivne" : undefined} onClick={() => setSumma(100)}>100€</button>
      <div>Kinkekaart { summa } €</div>

      <br /><br />

      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br /><br />

      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        />
    </div>
  )
}

export default Kinkekaart 