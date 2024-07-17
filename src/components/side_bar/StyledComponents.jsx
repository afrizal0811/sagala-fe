import styled from 'styled-components'
import colors from '../../constants/colors'

export const Wrapper = styled.div`
  background-color: white;
  height: 100dvh;
  width: 30%;
  padding: 20px;
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
`
export const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1px;
  & > span {
    font-weight: 400;
  }
`
export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 0 30px;
`
export const StyledItem = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  cursor: pointer;
  ${({ $isActive }) =>
    $isActive &&
    `
    border-right: 3px solid ${colors.hanPurple}; 
    font-weight: 700; 
    & > span {
        color: ${colors.hanPurple};
    }`}
`
