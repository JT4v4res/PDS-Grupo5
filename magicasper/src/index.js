import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


 // let Component; 
  // switch (window.location.pathname) {
  //   case '/Home':
  //     Component = <Home/>
  //     break
  //   case '/Perfil':
  //     Component = <Perfil/>
  //     break
  //   case '/Disciplinas':
  //     Component = <Disciplinas/>
  //     break
  //   default:
  //     window.location.pathname = '/'
  // }