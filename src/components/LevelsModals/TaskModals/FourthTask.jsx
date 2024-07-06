import { CloseTaskBtn, StyledTaskClose, LeftBtn, LeftBtnImg, TranslationLevelModal, TranslationTaskName, TranslationTaskForm, TranslationTaskFormInput, TranslationTaskFormSubmit, TranslationTaskDescription, TranslationTaskGoal } from "../LevelsModals.js";
import React, { useState, useEffect } from 'react';
import leftArrow from "../../../assets/images/LeftArrow.png"


const FourthTask = ({closeModal, handleLeftClick}) => {
  const [russianTranslation, setRussianTranslation] = useState('');

  useEffect(() => {
    fetch('tasks.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then(tasksData => {
        const randomTask = tasksData.task.find(task => task.level === 1);
        const russianValue = randomTask ? randomTask.russian : '';
        setRussianTranslation(russianValue);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }, []);

  return (
    <TranslationLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>

      <TranslationTaskName>Перевод</TranslationTaskName>
      <TranslationTaskDescription>
        Напишите текст на английском языке:
      </TranslationTaskDescription>
      <TranslationTaskGoal>{russianTranslation} -</TranslationTaskGoal>

      <TranslationTaskForm name="videoAnswer">
        <TranslationTaskFormInput type="text" />
        <TranslationTaskFormSubmit type="submit">Отправить</TranslationTaskFormSubmit>
      </TranslationTaskForm>
      
      <LeftBtn onClick={handleLeftClick} type="button"><LeftBtnImg src={leftArrow} alt="" /></LeftBtn>
    </TranslationLevelModal>
  )
}

export default FourthTask


