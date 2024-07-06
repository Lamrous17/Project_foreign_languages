import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { CloseTaskBtn, StyledTaskClose, MatchItem, RightBtn, RightBtnImg, MatchLevelModal, LeftBtn, LeftBtnImg, MatchTaskName, MatchContainer, MatchList } from "../LevelsModals.js";
import rightArrow from "../../../assets/images/RightArrow.png";
import leftArrow from "../../../assets/images/LeftArrow.png";
import tasksData from "./tasks.json";

const SecondTask = ({ closeModal, handleRightClick, handleLeftClick }) => {
  const [shuffledEnglish, setShuffledEnglish] = useState([]);
  const [shuffledRussian, setShuffledRussian] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    const shuffledEnglishArray = tasksData.task.map(task => task.english).sort(() => Math.random() - 0.5);
    const shuffledRussianArray = tasksData.task.map(task => task.russian).sort(() => Math.random() - 0.5);
    setShuffledEnglish(shuffledEnglishArray);
    setShuffledRussian(shuffledRussianArray);
  }, []);

  const handleSwap = (index1, index2) => {
    const newShuffledEnglish = [...shuffledEnglish];
    [newShuffledEnglish[index1], newShuffledEnglish[index2]] = [newShuffledEnglish[index2], newShuffledEnglish[index1]];
    setShuffledEnglish(newShuffledEnglish);
  };

  const handleMatch = (english, russian, id) => {
    const newMatchedPairs = [...matchedPairs, { english, russian, id }];
    setMatchedPairs(newMatchedPairs);

    if (newMatchedPairs.length === tasksData.task.length) {
      const isAllCorrect = newMatchedPairs.every(pair => pair.id === pair.id);
      if (isAllCorrect) {
        toast.success('Все сопоставлено верно!');
        handleRightClick(); 
      } else {
        toast.error('Не все сопоставлено верно. Пожалуйста, проверьте свои ответы.');
      }
    }
  };

  return (
    <MatchLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>

      <MatchTaskName>Задание на соответствие</MatchTaskName>

      <MatchContainer>
        <MatchList>
          {shuffledEnglish.map((english, index) => (
            <MatchItem
              key={index}
              draggable
              onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
            >
              {english}
            </MatchItem>
          ))}
        </MatchList>
        <MatchList>
          {shuffledRussian.map((russian, index) => (
            <MatchItem
              key={index}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const draggedIndex = e.dataTransfer.getData('text/plain');
                handleSwap(draggedIndex, index);
                handleMatch(shuffledEnglish[draggedIndex], russian, index);
              }}
            >
              {russian}
            </MatchItem>
          ))}
        </MatchList>
      </MatchContainer>

      <LeftBtn onClick={handleLeftClick} type="button"><LeftBtnImg src={leftArrow} alt="" /></LeftBtn>
      <RightBtn onClick={handleRightClick} type="button" disabled={matchedPairs.length !== tasksData.task.length}>
        <RightBtnImg src={rightArrow} alt="" />
      </RightBtn>
    </MatchLevelModal>
  );
};

export default SecondTask;
