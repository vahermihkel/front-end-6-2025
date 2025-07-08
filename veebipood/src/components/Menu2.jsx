import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

function Menu() {
  const { t, i18n } = useTranslation();
  // return <h1>{t('Welcome to React')}</h1>

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel", "en");
  }

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel", "et");
  }

  return (
    <div>
      <button onClick={changeLanguageEN}>English</button>
      <button onClick={changeLanguageET}>Eesti</button>

      <Link to="/">
        <img className="pilt" src="https://content2.kawasaki.com/ContentStorage/CKM/ProductTrimGroup/1047/c58dc8f3-fbe3-4d6c-a07f-b39b27592935.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button>{t("menu.cart")}</button>
      </Link>

      <Link to="/lisa-toode">
        <button>{t("menu.add-product")}</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>{t("menu.giftcards")}</button>
      </Link>

      <Link to="/seaded">
        <button>{t("menu.settings")}</button>
      </Link>

      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>

      <Link to="/arrays">
        <button>Array-d</button>
      </Link>

      <Link to="/halda">
        <button>Mine Array-sid lisama ja kustutama</button>
      </Link>

      <Link to="/api-home">
        <button>API otspunktid</button>
      </Link>
    </div>
  )
}

export default Menu