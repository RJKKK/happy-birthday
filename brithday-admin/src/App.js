import React from 'react';
import  { ContextProvider } from "./store";
import './App.css';
function App(props) {
  return (
      <div className="App">
        <ContextProvider>
          {props.children}
        </ContextProvider>
      </div>
  );
}

export default App;
