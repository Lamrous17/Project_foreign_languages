
import menu from '../../assets/icons/Menu.svg'
import flag from '../../assets/images/flag.jpg'
import { Flag, FlagContainer, LanguageContainer, LanguageName, ScoreCounter, StyledLanguageHeader, StyledLanguageMenuBtn, StyledLanguageOutBtn, UserName } from './LanguageHeader.js'
import UserMenu from '../UserMenu/UserMenu.jsx'
import { useLocation } from 'react-router-dom'

const LanguageHeader = () => {
  const userName = localStorage.getItem("userName");
  const counter = 0;
  localStorage.setItem("userCounter", counter);
  const userCounter = localStorage.getItem("userCounter");
  const location = useLocation();

  function openMenu() {
    console.log(location)
    const menu = document.querySelector('#userMenu')
    menu.style.transform = "translateX(0%)";
  }

  return (
    <>
      <UserMenu/>
      <StyledLanguageHeader>
        <LanguageContainer>
          <StyledLanguageMenuBtn onClick={openMenu} type="button"> <img src={menu} alt="" /></StyledLanguageMenuBtn>
          {location.pathname === '/english' &&
            <FlagContainer>
              <Flag src={flag} alt="" />
              <LanguageName>English language</LanguageName>
            </FlagContainer>}
          
        </LanguageContainer>
        <UserName>{userName}</UserName>
        <ScoreCounter>{userCounter}</ScoreCounter>
      </StyledLanguageHeader>
    </>
  )
}

export default LanguageHeader