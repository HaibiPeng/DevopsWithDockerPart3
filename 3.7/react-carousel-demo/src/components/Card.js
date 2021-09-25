import React from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { LoremIpsum } from "lorem-ipsum";
import "../style/Card.css";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 8,
    min: 4
  }
});

const Card = ({ title, src, total }) =>{
  return (
    <div className="card">
      <TransitionGroup>
          <CSSTransition 
            classNames="cards"                                    
            timeout={{ enter: 1200, exit: 1200 }}
            key={src}
            >
            <div className="card-info">
                <h2 className="card-title">{title}</h2>
                <h4 className="card-discription">{lorem.generateSentences(1)}</h4>
                <div className="card-wrap">
                  <img className="card-image" src={src} alt={title} />
                  <p>{lorem.generateSentences(6)}</p>
                </div>
            </div>  
          </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Card;
