
import React from 'react';
import PopupWithForm from './PopupWithForm.js';


function AddPlacePopup(props){ // Попап создания карточки
    return (
        <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Создать"
        isOpen={props.isOpen}
        onClose={props.onClose}
        >
            <input name="card-form-title" type="text" id="mesto-input" className="form__input form__input_card_title" placeholder={"Название"}  autoComplete="off" minLength={2} maxLength={30}  required />
            <span className="form__input-error mesto-input-error"></span>
            <input name="card-form-link" type="url" id="url-input" className="form__input form__input_card_link" placeholder={"Ссылка на картинку"} autoComplete="off" required />
            <span className="form__input-error url-input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;