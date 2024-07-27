import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-blue/theme.css";


function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Edit <code>src/App.tsx</code> and save to reload.
             */}
            <Button label="Prime React Button" />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
