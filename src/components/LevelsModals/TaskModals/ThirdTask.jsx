import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { CloseTaskBtn, StyledTaskClose, RightBtn, RightBtnImg, LeftBtn, LeftBtnImg, VideoLevelModal, VideoTaskName, VideoTaskDescription, StyledVideo, VideoContainer, VideoTaskForm, VideoTaskFormInput, VideoTaskFormSubmit } from "../LevelsModals.js";
import rightArrow from "../../../assets/images/RightArrow.png";
import leftArrow from "../../../assets/images/LeftArrow.png";
import videoFirstLevel from "../../../assets/videos/firstLevel.mp4";
import tasksData from "./tasks.json";

const ThirdTask = ({ closeModal, handleRightClick, handleLeftClick }) => {
  const correctAnswer = tasksData.task[6].english;
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      toast.success('Верно!'); 
      handleRightClick(); 
    } else {
      toast.error('Неверно. Попробуйте еще раз!'); 
    }
  };

  return (
    <VideoLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>

      <VideoTaskName>Видео-фрагмент</VideoTaskName>

      <VideoContainer>
        <VideoTaskDescription>Напишите услышанное в видео:</VideoTaskDescription>
        <StyledVideo src={videoFirstLevel} controls />
      </VideoContainer>

      <VideoTaskForm name="videoAnswer" onSubmit={handleFormSubmit}>
        <VideoTaskFormInput
          type="text"
          value={userInput}
          onChange={handleInputChange}
          required
        />
        <VideoTaskFormSubmit type="submit">Отправить</VideoTaskFormSubmit>
      </VideoTaskForm>

      <LeftBtn onClick={handleLeftClick} type="button"><LeftBtnImg src={leftArrow} alt="" /></LeftBtn>
      <RightBtn onClick={handleRightClick} type="button" disabled={!userInput}><RightBtnImg src={rightArrow} alt="" /></RightBtn>
    </VideoLevelModal>
  );
};

export default ThirdTask;
