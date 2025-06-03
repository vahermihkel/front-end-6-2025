import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Esindused from './pages/Esindused'
import Kinkekaart from './pages/Kinkekaart'
import NotFound from './pages/NotFound'
import Seaded from './pages/Seaded'

function App() {

  return (
    <>
      <Link to="/">
        <img className="pilt" src="https://content2.kawasaki.com/ContentStorage/CKM/ProductTrimGroup/1047/c58dc8f3-fbe3-4d6c-a07f-b39b27592935.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>

      <Link to="/esindused">
        <button>Esindused</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Kinkekaardid</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

    {/* path --> mis järgneb baasURL-le. localhost:5173 */}
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/lisa-toode" element={<LisaToode />} />
        <Route path="/esindused" element={<Esindused />} />
        <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
        <Route path="/seaded" element={<Seaded />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
