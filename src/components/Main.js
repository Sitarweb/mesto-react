
import React from 'react';
import api from '../utils/Api.js';
import Card from '../components/Card.js';

function Main(props){

    // Переменные внутреннего состояния
    const [userName, setuserName] = React.useState('');
    const [userDescription, setuserDescription] = React.useState('');
    const [userAvatar, setuserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    
    // Делается запрос к серверу
    React.useEffect(() => {
        api.getAllNeededData()
        .then((res) => {
            const [dataForUserInfo, dataForCards] = res;
            setuserName(dataForUserInfo.name);
            setuserDescription(dataForUserInfo.about);
            setuserAvatar(dataForUserInfo.avatar);
            setCards(dataForCards.reverse());
            
        })
        .catch(err => console.log(err));
    }, []); 

    return(
        <main className="content">

            <section className="profile">
                <div className="profile__content">
                    <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}>
                        <img src={userAvatar} alt="Ваше фото" className="profile__avatar" />
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__info-title">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__info-paragraph">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button"  type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map(card => {
                    return (<Card key={card._id} card={card}  onCardClick={props.onCardClick} />)
                })}
            </section>

        </main>
    );
}

export default Main;