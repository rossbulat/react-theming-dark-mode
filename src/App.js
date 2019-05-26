import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTheme } from './ThemeContext';
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from './theme';

function App (props) {

  const themeToggle = useTheme();

  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
      <p>
        <Button onClick={() => themeToggle.toggle()}>
          {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
      </p>
    </header>
  );
}

export default withTheme(App);
