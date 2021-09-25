import React, { useState, useEffect, useRef } from "react";
import { cardInfo } from "../assets/const";
import Card from "./Card";
import CardDot from "./CardDot";
import ConfigPanel from "./ConfigPanel";
import "../style/Carousel.css";

const Carousel = (props) => {
  const [cardIdx, setCardIdx] = useState(0);
  const [speed, setSpeed] = useState(2000);
  const [manual, setManual] = useState(false);
  const id = useRef();
  
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;

  const stopAutoPlay = () => {
    setManual(true);
    clearInterval(id.current);
  }

  const nextCard = () => {
    setCardIdx(cardIdx === total - 1 ? 0 : cardIdx + 1);
    stopAutoPlay();
  };
  const prevCard = () => {
    setCardIdx(cardIdx === 0 ? total - 1 : cardIdx - 1);
    stopAutoPlay();
  };

  useEffect(() => {
    id.current = setInterval(() => {
      setCardIdx(cardIdx === total - 1 ? 0 : cardIdx + 1);
    }, speed);
    if (manual) {
      stopAutoPlay();
    }
    return () => clearInterval(id.current);
  }, [speed, cardIdx, total, manual]);

  return (
    <div className="carousel">
      <h1>React Carousel</h1>
      <Card
        title={card.title}
        src={card.src}
        total={total}
      />
      <div className="carousel-main">
        <div className="carousel-navigation">
          <i
            className="fas fa-chevron-circle-left fa-2x"
            onClick={prevCard}
            data-testid="left-arrow"
          />
          <CardDot cardAmout={total} currentCard={cardIdx} setCardIdx={setCardIdx} stopAutoPlay={stopAutoPlay} />
          <i
            className="fas fa-chevron-circle-right fa-2x"
            onClick={nextCard}
            data-testid="right-arrow"
          />
        </div>
      </div>
      <ConfigPanel speed={speed} setSpeed={setSpeed} stopAutoPlay={stopAutoPlay} setManual={setManual} />
    </div>
  );
}

Carousel.defaultProps = cardInfo;

export default Carousel;
