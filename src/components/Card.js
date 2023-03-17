
import React from 'react';
import urn from '../images/urn.svg';

function Card(props){ // Шаблон по которому создается карточка

    function handleClick() {
        props.onCardClick(props.card);
      } 

    return(
        <article className="elements__card">
            <img src={props.card.link} alt={props.card.name} className="elements__image" onClick={handleClick} />
            <img className="elements__urn" alt="Урна" src={urn} />
            <div className="elements__text">
                <h3 className="elements__title">{props.card.name}</h3>
                <div className="elements__like-info">
                    <button className="elements__heart-button" type="button"></button>
                    <p className="elements__likes-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    );
}

export default Card;