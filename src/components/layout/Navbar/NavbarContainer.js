import React, { useState } from "react";
import NavbarView from "./NavbarView"

const NavbarContainer = (props) => {

  const [prefLang, setPrefLang] = useState('');

  const handleChangeLang = (e) => {
    setPrefLang({ prefLang: [e.target.value] })
    props.i18n.changeLanguage(e.target.value)
  }

  return (
    <React.Fragment>
    <NavbarView
      {...props}
      handleChangeLang={handleChangeLang}
      prefLang={prefLang}
      />
    </React.Fragment>
  )
}

export default NavbarContainer;