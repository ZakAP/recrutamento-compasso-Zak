import React from "react";
import Home from "../pages/Home";
import "../Styles/BasicStyle.css"

function Router() {
    return (
      <div className="background">
        <header className="header">
          <img src="https://www.premalkatigar.com/wp-content/uploads/2020/08/9919.png" alt="Logo do GitHub"/>
          <h1>Buscas GitHub</h1>
          <h3>Ache as informações que precisa com um simples passo!</h3> 
        </header>
        <Home />
      </div>
    );
  }
  
export default Router;