import { useTranslation } from "react-i18next/";
import LandingPage from "./components/layout/LandingPage";

function App() {

  const [t, i18n] = useTranslation('common');

  return (
    <div>
    <LandingPage t={t} i18n={i18n} />
    </div>
  )
}

export default App;