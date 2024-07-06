import React from 'react';
import { CloseTaskBtn, StyledTaskClose, VocabularyLevelModal, VocabularyTaskName, VocabularyList, VocabularyItem, RightBtn, RightBtnImg } from "../LevelsModals.js";
import rightArrow from "../../../assets/images/RightArrow.png";
import tasksData from "./tasks.json"; 

const FirstTask = ({ closeModal, handleRightClick }) => {
  const vocabularyItems = tasksData.task.map(task => (
    <VocabularyItem key={task.id}>
      {task.english} - {task.russian}
    </VocabularyItem>
  ));

  return (
    <VocabularyLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>
      <VocabularyTaskName>Словарь</VocabularyTaskName>
      <VocabularyList>
        {vocabularyItems}
      </VocabularyList>
      <RightBtn onClick={handleRightClick} type="button"><RightBtnImg src={rightArrow} alt="" /></RightBtn>
    </VocabularyLevelModal>
  );
};

export default FirstTask;
