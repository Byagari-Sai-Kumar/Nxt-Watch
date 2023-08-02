import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HeaderOverallContainer = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`

export const LinkImage = styled(Link)`
  width: 30%;
  max-width: 120px;
  text-decoration: none;
`

export const WebsiteLogoImage = styled.img`
  width: 100%;
  max-width: 120px;
  cursor: pointer;
`
export const IconsContainer = styled.div`
  width: 40%;
  max-width: 300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 30%;
    justify-content: space-around;
  }
`
export const IconButtons = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
`
export const ListIconButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  cursor: pointer;
  border: none;
  @media (min-width: 768px) {
    display: none;
  }
`

export const IconButtons2 = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  cursor: pointer;
  border: none;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ProfileLogoImage = styled.img`
  display: none;
  width: 22px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: inline;
  }
`

export const LogoutButton = styled.button`
  width: 100px;
  height: 35px;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  background: none;
  font-family: 'Roboto';
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`

export const PopupOverallContainer = styled.div`
  display: flex;
`
export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 20px;
  color: ${props => props.color};
`

export const PopupContainer2 = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  @media (min-width: 768px) {
    display: none;
  }
`

export const PopupContainer = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  @media (min-width: 768px) {
    width: 400px;
    height: 200px;
  }
`

export const PopupText = styled.p`
  font-size: 16px;
  color: ${props => props.textColor};
`

export const AlignButtons = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const CancelButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: transparent;
  font-size: 16px;
  border: 1px solid #606060;
  color: ${props => props.textColor};
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  background-color: #3b82f6;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`
