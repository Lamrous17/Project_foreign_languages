import { CloseTaskBtn, StyledTaskClose, LeftBtn, LeftBtnImg, TranslationLevelModal, TranslationTaskName, TranslationTaskForm, TranslationTaskFormInput, TranslationTaskFormSubmit, TranslationTaskDescription, TranslationTaskGoal } from "../LevelsModals.js";
import React, { useState, useEffect } from 'react';
import leftArrow from "../../../assets/images/LeftArrow.png"
import tasksData from "./tasks.json"; 

const FourthTask = ({ closeModal, handleLeftClick }) => {
  const vocabularyItems = tasksData.task[0].russian


  return (
    <TranslationLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>

      <TranslationTaskName>Перевод</TranslationTaskName>
      <TranslationTaskDescription>
        Напишите текст на английском языке:
      </TranslationTaskDescription>
      <TranslationTaskGoal>{vocabularyItems} -</TranslationTaskGoal>

      <TranslationTaskForm name="videoAnswer">
        <TranslationTaskFormInput type="text" />
        <TranslationTaskFormSubmit type="submit">Отправить</TranslationTaskFormSubmit>
      </TranslationTaskForm>
      
      <LeftBtn onClick={handleLeftClick} type="button"><LeftBtnImg src={leftArrow} alt="" /></LeftBtn>
    </TranslationLevelModal>
  )
}

export default FourthTask


