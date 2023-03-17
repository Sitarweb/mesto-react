import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  // Попап обновления аватара
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        name="avatar-form-link"
        type="url"
        id="avatar-input"
        className="form__input "
        placeholder={"Ссылка на фото"}
        autoComplete="off"
        required
      />
      <span className="form__input-error avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
