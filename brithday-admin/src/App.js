import React from 'react';
import  { ContextProvider } from "./store";
import { renderRoutes } from "react-router-config";
import './App.css';
function App(props) {
    console.log(props)
  return (
      <div className="App">
        <ContextProvider>
            {(renderRoutes(props.route.routes))}
        </ContextProvider>
      </div>
  );
}

export default App;
