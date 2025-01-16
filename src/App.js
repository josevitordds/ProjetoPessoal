import "./App.css";
import React, { useState } from "react";
import Carrossel from "./Carrosel";
import imgTes from "./imgs/imgTes.png"
import imgTest1 from "./imgs/imgTest1.png"
import imgTest2 from "./imgs/imgTest2.png"
import imgTest3 from "./imgs/imgTest3.png"
import imgTest4 from "./imgs/imgTest4.png"
import imgTest5 from "./imgs/imgTest5.png"
import CarrosselBTS from "./CarrosselBTS";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleBTS, setIsVisibleBTS] = useState(false);
  const [isVisibleText, setIsVisibleText] = useState(false);
  const [isFirstImage, setIsFirstImage] = useState(true);
  const [isFirstImage2, setIsFirstImage2] = useState(true);
  const [isFirstImage3, setIsFirstImage3] = useState(true);
  const [isFirstImage4, setIsFirstImage4] = useState(true);
  const [isFirstImage5, setIsFirstImage5] = useState(true);
  const [showIframe, setShowIframe] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
    window.open("https://open.spotify.com/intl-pt/track/4gEFeIEORz8thfqMY7nKcb?si=13b5b273d60f4baa")
  };
  const toggleVisibilityBTS = () => {
    setIsVisibleBTS((prevState) => !prevState);
  };
  const toggleVisibilityText = () => {
    setIsVisibleText((prevState) => !prevState);
  };

  const hideOnClickOutside = (e) => {
    if (e.target.classList.contains("overlay-background")) {
      setIsVisible(false);
    }
  };
  const hideOnClickOutsideBTS = (e) => {
    if (e.target.classList.contains("BTSoverlay-background")) {
      setIsVisible(false);
    }
  };
  const clickTextSpot = () => {
    setShowIframe(true);
  };

  const hideOnClickOutsideText = (e) => {
    if (e.target.classList.contains("textOverlay-background")) {
      setIsVisibleText(false);
    }
  };
  const toggleImage = () => {
    setIsFirstImage(!isFirstImage);
  };
  const toggleImage2 = () => {
    setIsFirstImage2(!isFirstImage2);
  };
  const toggleImage3 = () => {
    setIsFirstImage3(!isFirstImage3);
  };
  const toggleImage4 = () => {
    setIsFirstImage4(!isFirstImage4);
  };
  const toggleImage5 = () => {
    setIsFirstImage5(!isFirstImage5);
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
      {isVisibleBTS && (
        <div className="BTSoverlay-background" onClick={hideOnClickOutsideBTS}>
          <div className="imagesHand">
            <CarrosselBTS />
          </div>
        </div>
      )}
      {isVisibleText && (
        <div className="textOverlay-background" onClick={hideOnClickOutsideText}>
          <div className="textImg">
            <p>Meu amor,<br />

              Hoje completamos dois meses de uma jornada que tem sido de pura felicidade e aprendizado. Em tão pouco tempo, construímos momentos que já guardo no coração como verdadeiros tesouros(e na minha galeria tbm).

              <br />Cada dia ao seu lado é especial, cada sorriso seu ilumina a minha vida de uma forma que eu jamais poderia imaginar. Você trouxe paz, carinho e alegria ao meu mundo, e eu só consigo imaginar como será incrível continuar escrevendo essa nossa história juntos.

              <br /> Dois meses podem parecer pouco para alguns, mas, para mim, é o início de algo eterno. Obrigado por ser quem você é, por compartilhar sua vida comigo e por me fazer sentir tão amado.

              <br />Eu te amo e mal posso esperar pelo que está por vir :) </p>
              <img  src={ imgTes}></img>
          </div>
        </div>
      )}
      <div className="imgCoracao1" onClick={toggleImage}>
        <img src={isFirstImage ? imgTes : imgTest5}></img>
      </div>
      <div className="imgCoracao2" onClick={toggleImage2}>
        <img src={isFirstImage2 ? imgTes : imgTest2}></img>
      </div>
      <div className="imgCoracao3" onClick={toggleImage3}>
        <img src={isFirstImage3 ? imgTes : imgTest3}></img>
      </div>
      <div className="imgCoracao4" onClick={toggleImage4}>
        <img src={isFirstImage4 ? imgTes : imgTest4}></img>
      </div>
      <div className="imgCoracao5">
        <img onClick={toggleVisibilityText} src={imgTes}></img>
      </div>
      <div className="imgCoracao6" onClick={toggleImage5}>
        <img src={isFirstImage5 ? imgTes : imgTest1}></img>
      </div>
      <div className="texto-central">
        {showIframe && (
          <iframe
          
            src="https://open.spotify.com/embed/track/5w50Ywn17sXpDFDhe0Sxtw?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        )}
        <h2 onClick={clickTextSpot}>Feliz 2 meses!!</h2>
      </div>
      <div className="botao2meses">
        <section onClick={toggleVisibility}>clique aqui</section>
      </div>
      <div className="botao2mesesBTS">
        <section onClick={toggleVisibilityBTS}>bTs</section>
      </div>
    </div>
  );
}

export default App;
