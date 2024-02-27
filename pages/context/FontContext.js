import React, { createContext, useContext } from 'react';
import { useFonts } from 'expo-font';

const FontContext = createContext();

export const FontProvider = ({ children }) => {

  const fonts = {
    RussoOne: require('../../assets/fonts/RussoOne.ttf'),
    OpenSans: require('../../assets/fonts/OpenSans.ttf'),
    OpenSansBold: require('../../assets/fonts/OpenSansBold.ttf'),
  };

  const [loaded] = useFonts(fonts);
  
  // Retorna el contexto de fuentes con las fuentes cargadas
  // fonts es un objeto con las fuentes disponibles 
  // loades es un booleano que indica si ya fueron cargadas las fuentes
  return <FontContext.Provider value={{ fonts, loaded }}>{children}</FontContext.Provider>;
};

// Hook para utilizar el contexto de fuentes
export const useFontContext = () => {
  return useContext(FontContext);
};