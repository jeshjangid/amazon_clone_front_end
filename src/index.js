import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import common_in from './translation/in/common.json';
import common_en from './translation/en/common.json';

i18next.init({
  whitelist: ['en', 'in'],
  interpolation : { escapeValue : false },
  lng: 'en',
  resources: {
    en: {
      common: common_en
    },
    in: {
      common: common_in
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);