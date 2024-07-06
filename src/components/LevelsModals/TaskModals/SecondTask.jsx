import React, { useState, useEffect } from 'react';
import { CloseTaskBtn, StyledTaskClose, MatchItem, RightBtn, RightBtnImg, MatchLevelModal, LeftBtn, LeftBtnImg, MatchTaskName, MatchContainer, MatchList } from "../LevelsModals.js";
import rightArrow from "../../../assets/images/RightArrow.png";
import leftArrow from "../../../assets/images/LeftArrow.png";
import tasksData from "./tasks.json";
import toast from 'react-hot-toast';

const SecondTask = ({ closeModal, handleRightClick, handleLeftClick }) => {
  const [shuffledEnglish, setShuffledEnglish] = useState([]);
  const [shuffledRussian, setShuffledRussian] = useState([]);

  useEffect(() => {
    // Shuffle the English and Russian arrays
    const shuffledEnglishArray = tasksData.task.map(task => task.english).sort(() => Math.random() - 0.5);
    const shuffledRussianArray = tasksData.task.map(task => task.russian).sort(() => Math.random() - 0.5);
    setShuffledEnglish(shuffledEnglishArray);
    setShuffledRussian(shuffledRussianArray);
  }, []);

  return (
    <MatchLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>

      <MatchTaskName>Задание на соответствие</MatchTaskName>

      <MatchContainer>
        <MatchList>
          {shuffledEnglish.map((english, index) => (
            <MatchItem key={index}>{english}</MatchItem>
          ))}
        </MatchList>
        <MatchList>
          {shuffledRussian.map((russian, index) => (
            <MatchItem key={index}>{russian}</MatchItem>
          ))}
        </MatchList>
      </MatchContainer>

      <LeftBtn onClick={handleLeftClick} type="button"><LeftBtnImg src={leftArrow} alt="" /></LeftBtn>
      <RightBtn onClick={handleRightClick} type="button"><RightBtnImg src={rightArrow} alt="" /></RightBtn>
    </MatchLevelModal>
  );
};

export default SecondTask;
