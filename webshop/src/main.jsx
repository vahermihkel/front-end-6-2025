import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import './i18n';

// let mutuuja = 1
// muutuja = 2

// .carousel { width: 300px }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 4 päeva
// 5. 03.06 - React algus, pages, navigeerimine
// 6. 05.06 - useState, useRef
// 7. 10.06 - dünaamiline CSS, componendi väljatõste.
//        veebimajutus: Firebase .web.app
// 8. 12.06 - toastify, kalkulaator
// 9. K 18.06 - arrays: väljakuvamine, sorteerimine, filtreerimine
// mälukoha kustutamine (slice)
// 10. R 20.06 - arrays jätk: tabel, kustutamine (splice), lisamine, faili tõstmine
// 11  K 25.06 useParams
// 12. R 27.06 muutmine, ostukorv, tõlge, localStorage
// 13. T 01.07 otsing, unikaalsuse kontroll, kokkuarvutus, API, kasutajad ----> koju inglise keelne veebipood
// 14. R 04.07 bootstrap, emaili saatmine, MUI, kujundus, kaart
// 15. T 08.07 Webshop --> ülevaatamine
// 16. R 11.07
// 17. T 15.07
// Töötukassale öelda, et viimane päev on 24.07 ja allkirjalehele paneme ka 24.07
// 18. T 29.07 --> lõpuprojekti esitlemine  2ak/h  9.00-10.30