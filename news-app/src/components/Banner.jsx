import React from 'react'
import { useState, useEffect } from 'react'

const Banner = ({ data }) => {

    console.log(data)

    return (
        <div className="border-2 border-blue-300 rounded-md h-[240px]  ">
            
        </div>
    )
}

export default Banner

{/*
    
    import React, { useState } from 'react';

const translations = {
  en: {
    title: "Welcome to the Multilingual App",
    description: "This is an example of switching between languages.",
  },
  es: {
    title: "Bienvenido a la aplicación multilingüe",
    description: "Este es un ejemplo de cómo cambiar entre idiomas.",
  },
  fr: {
    title: "Bienvenue dans l'application multilingue",
    description: "Ceci est un exemple de basculement entre les langues.",
  },
};

const App = () => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <h1>{translations[language].title}</h1>
      <p>{translations[language].description}</p>

      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
    </div>
  );
};

export default App;
    */}