import { useTranslation } from "react-i18next";

function Signup() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <label>{t("signup.username")}</label><br />
        <input type="text" /><br />
        <label>{t("signup.password")}</label><br />
        <input type="password" /><br />
        <label>{t("signup.repeat-password")}</label><br />
        <input type="password" /><br />
        <button>{t("signup.button")}</button>
      </div>
    </div>
  );
}

export default Signup;