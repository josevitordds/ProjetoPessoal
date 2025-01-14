import "./App.css";
import React, { useState } from "react";
import Carrossel from "./Carrosel";
import imgTes from "./imgs/imgTes.png"

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleText, setIsVisibleText] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };
  const toggleVisibilityText = () => {
    setIsVisibleText((prevState) => !prevState);
  };

  const hideOnClickOutside = (e) => {
    if (e.target.classList.contains("overlay-background")) {
      setIsVisible(false);
    }
  };
  const clickTextSpot =()=>{
    window.open("https://open.spotify.com/intl-pt/track/5w50Ywn17sXpDFDhe0Sxtw?si=53cc455b01de4f24");
  }

  const hideOnClickOutsideText = (e) => {
    if (e.target.classList.contains("textOverlay-background")) {
      setIsVisibleText(false);
    }
  };

  return (
    <div className="container">
      {isVisible && (
        <div className="overlay-background" onClick={hideOnClickOutside}>
          <div className="imagesHand">
            <Carrossel />
          </div>
        </div>
      )}
      {isVisibleText && (
        <div className="textOverlay-background" onClick={hideOnClickOutsideText}>
          <div className="textImg">
            <p>hdiasifdiahsfdhasopdfasohfoashfoahsfoahsofhaoshfoashfoashfoafoashfoahsofahsofhasofhaofhaofhaoshfaoshfaohfaioshfaishfioashfioashfio</p>
          </div>
        </div>
      )}
      <div className="imgCoracao1">
        <img src={imgTes}></img>
      </div>
      <div className="imgCoracao2">
        <img src={imgTes}></img>
      </div>
      <div className="imgCoracao3">
        <img src={imgTes}></img>
      </div>
      <div className="imgCoracao4">
        <img src={imgTes}></img>
      </div>
      <div className="imgCoracao5">
        <img onClick={toggleVisibilityText} src={imgTes}></img>
      </div>
      <div className="imgCoracao6">
        <img src={imgTes}></img>
      </div>
      <div className="texto-central">
        <h2 onClick={clickTextSpot}>asijfiasfiasi</h2>
      </div>
      <div className="botao2meses">
        <section onClick={toggleVisibility}>clique aqui</section>
      </div>
    </div>
  );
}

export default App;
