import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { CloseTaskBtn, StyledTaskClose, LeftBtn, LeftBtnImg, TranslationLevelModal, TranslationTaskName, TranslationTaskForm, TranslationTaskFormInput, TranslationTaskFormSubmit, TranslationTaskDescription, TranslationTaskGoal } from "../LevelsModals.js";
import leftArrow from "../../../assets/images/LeftArrow.png";
import tasksData from "./tasks.json";

const FourthTask = ({ closeModal, handleLeftClick }) => {
  const [userInput, setUserInput] = useState('');
  const correctAnswer = tasksData.task[0].english;
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setShowToast(true);
      toast.success('Верно!');
    } else {
      setShowToast(false);
      toast.error('Неверно. Попробуйте еще!');
    }
  };

  return (
    <TranslationLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>

      <TranslationTaskName>Перевод</TranslationTaskName>
      <TranslationTaskDescription>
        Напишите текст на английском языке:
      </TranslationTaskDescription>
      <TranslationTaskGoal>{tasksData.task[0].russian} -</TranslationTaskGoal>

      <TranslationTaskForm name="videoAnswer" onSubmit={handleFormSubmit}>
        <TranslationTaskFormInput
          type="text"
          value={userInput}
          onChange={handleInputChange}
          required
        />
        <TranslationTaskFormSubmit type="submit">Отправить</TranslationTaskFormSubmit>
      </TranslationTaskForm>

      <LeftBtn onClick={handleLeftClick} type="button"><LeftBtnImg src={leftArrow} alt="" /></LeftBtn>
    </TranslationLevelModal>
  );
};

export default FourthTask;
