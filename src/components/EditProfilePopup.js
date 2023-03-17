import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup(props) {
  // Попап редактирования профиля
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        name="profile-form-nickname"
        type="text"
        id="name-input"
        className="form__input form__input_mean_name"
        placeholder={"Имя профиля"}
        defaultValue={"Жак-Ив Кусто"}
        autoComplete="off"
        minLength={2}
        maxLength={40}
        required
      />
      <span className="form__input-error name-input-error"></span>
      <input
        name="profile-form-job"
        type="text"
        id="job-input"
        className="form__input form__input_mean_job"
        placeholder={"Описание профиля"}
        defaultValue={"Исследователь океана"}
        autoComplete="off"
        minLength={2}
        maxLength={200}
        required
      />
      <span className="form__input-error job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
