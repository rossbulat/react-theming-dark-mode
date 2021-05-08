import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor, textColor } from "./theme";

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({ mode: "light" });

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  const toggle = () => {
    const mode = themeState.mode === "light" ? `dark` : `light`;
    setThemeState({ mode: mode });
    //this snippet saves saves themestate mode in localStorage
    window.localStorage.setItem("mode", mode);
  };

  //This Hook fetches the mode from localStorage and sets ThemeState
  //if you comment this useEffect,the mode of this app will be light mode
  //ie., if the page gets reload, this react app will be in light mode
  useEffect(() => {
    let localTheme = window.localStorage.getItem("mode");
    localTheme && setThemeState({ mode: localTheme });
  }, []);

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode,
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
