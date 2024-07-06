import { useState } from "react";
import { ChangeModalBtn, CloseBtn, GoogleBtn, InputContainer, LeftPart, ModalAddIndfo, ModalForm, ModalHeaders, ModalOR, RightPart, StyledClose, StyledInput, StyledLine, StyledModal, SubmitBtn } from "./Modal"
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop.jsx";
import line from "../../assets/images/line.png";
import toast from "react-hot-toast";
import tasksData from "./users.json"; 

const Modal = ({ closeModal }) => {
  
  const [changeModal, setChangeModal] = useState(true);

  function access(e) {
    e.preventDefault();

    const enteredEmail = e.target.elements.user_mail.value;
    const enteredPassword = e.target.elements.user_password.value;

    const user = tasksData.user.find(
      (user) =>
        user["email"] === enteredEmail && user["Password"] === enteredPassword
    );

    if (user) {
      localStorage.setItem("userName", user.name);
      localStorage.setItem("userEmail", user.email);
      closeModal();
      localStorage.setItem("languageAccess", true);
      return toast.success("Добро пожаловать!");
    } else {
      return toast.error("Неправильно введенный имейл или пароль");
    }
  }
  return (
    <>
      <ModalBackdrop >
        {changeModal ? <StyledModal>
          <CloseBtn  type="button"><StyledClose onClick={closeModal}/></CloseBtn>
          <LeftPart>
            <ModalHeaders>
              Регистрация
            </ModalHeaders>
            <ModalAddIndfo>
              Ещё нет аккаунта?
            </ModalAddIndfo>
            <ChangeModalBtn onClick={() => setChangeModal(false)}>
              Зарегистрироваться
            </ChangeModalBtn>
          </LeftPart>
          <RightPart>
            <ModalHeaders>
              Вход
            </ModalHeaders>
            <GoogleBtn>
              Использовать Google
            </GoogleBtn>
            <ModalOR>
                <StyledLine src={line} alt="" />
                <p>OR</p>
                <StyledLine src={line} alt="" />
              </ModalOR>
            <ModalForm onSubmit={access}>
              <InputContainer>
                <label htmlFor="user_mail">
                 E-mail
                </label>
                <StyledInput  id="user_mail" type="email" name="user_mail"/>
              </InputContainer>
              <InputContainer>
                <label htmlFor="user_password">
              Пароль
              </label>
              <StyledInput id="user_password" type="password" name="user_password" />
              </InputContainer>
              
              <SubmitBtn type="submit">Войти</SubmitBtn>
            </ModalForm>
          </RightPart>
        </StyledModal>
          :
        <StyledModal>
          <CloseBtn  type="button"><StyledClose onClick={closeModal}/></CloseBtn>
          <LeftPart>
            <ModalHeaders>
              Авторизация
            </ModalHeaders>
            <ModalAddIndfo>
              Уже есть аккаунт?
            </ModalAddIndfo>
            <ChangeModalBtn onClick={() => setChangeModal(true)}>
              Войти
            </ChangeModalBtn>
          </LeftPart>
          <RightPart>
            <ModalHeaders>
              Регистрация
            </ModalHeaders>
            <GoogleBtn>
              Использовать Google
              </GoogleBtn>
              <ModalOR>
                <StyledLine src={line} alt="" />
                <p>OR</p>
                <StyledLine src={line} alt="" />
              </ModalOR>
            
            <ModalForm>
              <InputContainer>
                <label htmlFor="user_mail">
                 E-mail
                </label>
                <StyledInput  id="user_mail" type="text" name="user_mail"/>
              </InputContainer>
              <InputContainer>
                <label htmlFor="user_name">
                 Имя пользователя
                </label>
                <StyledInput  id="user_name" type="text" name="user_name"/>
              </InputContainer>
              <InputContainer>
                <label htmlFor="user_password">
              Пароль
              </label>
              <StyledInput id="user_password" type="password" name="user_password" />
              </InputContainer>
              
              <SubmitBtn type="submit">Зарегистрироваться</SubmitBtn>
            </ModalForm>
          </RightPart>
        </StyledModal>
        }
        
      </ModalBackdrop>
    </>
  )
}

export default Modal