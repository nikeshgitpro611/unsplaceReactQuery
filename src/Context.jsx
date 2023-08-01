import React, { useState, useEffect, useContext, createContext } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
   const [isDarkThem, setIsDarkThem] =  useState(false);
   const [searchThem, setSearchTheme] =  useState('cat');

   //if we click on dark btn then trur /false i want

   const toggleDarkTheme = () => {
    const newDarkThem = !isDarkThem;
    setIsDarkThem(newDarkThem);
    const body = document.querySelector('body');
    console.log(body);
    body.classList.toggle('dark-them', newDarkThem)
    localStorage.setItem('darkThem', newDarkThem)
   }

  return <appContext.Provider value={{isDarkThem,toggleDarkTheme,searchThem, setSearchTheme}}>{children}</appContext.Provider>;
};

export const useGlobalContext = () => useContext(appContext);
