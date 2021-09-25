import React from "react";
import "../style/CardDot.css";

const CardDot = ({ cardAmout, currentCard, setCardIdx, stopAutoPlay }) => {
    const dots = new Array(cardAmout).fill(1);

    const changeCard = (index) => {
        stopAutoPlay();
        setCardIdx(index);
    }

    return (
        <div className="carddot">
            {dots.map((_, index) => 
                <div className="dot" style={{ opacity: `${currentCard === index ? 1 : 0.5}` }} key={index} onClick={() => changeCard(index)}></div>
            )}
        </div>
    );
}

export default CardDot;