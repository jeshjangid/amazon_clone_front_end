import React, { useState } from "react";
import NavbarView from "./NavbarView"

const NavbarContainer = (props) => {

  const [prefLang, setPrefLang] = useState('');
  const [selectedCat, setSelectedCat] = useState(0);
  const [query, setQuery] = useState('');

  const productCategory = [
    "navbar.product_category.all",
    "navbar.product_category.smartphone",
    "navbar.product_category.kitchen_hardware",
    "navbar.product_category.prime_deal",
    "navbar.product_category.book"
  ];

  const handleChangeLang = (e) => {
    setPrefLang({ prefLang: [e.target.value] })
    props.i18n.changeLanguage(e.target.value)
  }

  const handleCatChange = (e, index) => {
    e.preventDefault();
    setSelectedCat(index);
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();

    console.log('Query:' + query);
    console.log('Category:' + selectedCat);
  }

  return (
    <React.Fragment>
    <NavbarView
      {...props}
      handleChangeLang={handleChangeLang}
      prefLang={prefLang}
      handleCatChange={handleCatChange}
      selectedCat={selectedCat}
      productCategory={productCategory}
      handleQueryChange={handleQueryChange}
      handleSearch={handleSearch}
      query={query}
      />
    </React.Fragment>
  )
}

export default NavbarContainer;