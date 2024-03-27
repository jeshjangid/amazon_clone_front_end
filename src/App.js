import { useTranslation } from "react-i18next/";
import LandingPage from "./components/layout/LandingPage";
import NavbarContainer from "./components/layout/Navbar/NavbarContainer";
import Footer from "./components/layout/Footer";
import LoginContainer from "./components/Login/LoginContainer";
import { Route, BrowserRouter } from "react-router-dom";

function App() {

  const [t, i18n] = useTranslation('common');
  const Login = () => (<LoginContainer t={t} i18n={i18n} />)
  const Landing = () => (<LandingPage t={t} i18n={i18n} />)

  return (
    <BrowserRouter>
      <div>
        <NavbarContainer t={t} i18n={i18n} />
        <Route exact path="/" component={Landing} />
        <Route exact path='/login' component={Login} />
        <Footer t={t} i18n={i18n} />
      </div>
    </BrowserRouter>
  )
}

export default App;