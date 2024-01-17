import styled from 'styled-components';

export const StyledLangItem = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 191px;
  height: 189px;
  background: conic-gradient(from 146.57deg at 55.18% 50.14%, rgba(228, 0, 219, 0.035) -12.08deg, #713BE4 291.95deg, rgba(217, 217, 217, 0) 341.66deg, rgba(228, 0, 219, 0.035) 347.92deg, #713BE4 651.95deg);
  border-top-right-radius: 24px 24px;
  cursor: pointer;
  @media screen and (min-width: 1450px) {
    width: 357px;
    height: 353px;
  }

`;
export const StyledLangItemImg = styled.img`
  @media screen and (max-width: 1449px) {
    max-width: 90px;
  }

`;