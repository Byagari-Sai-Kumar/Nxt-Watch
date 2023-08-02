import styled from 'styled-components'

export const NotFoundOverallBgContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const NavItemsAndAllVideosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const NavItemsContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 15%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export const NavItemsBottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
  color: ${props => props.color};
`
export const ContactUsText = styled.p`
  font-size: 16px;
  font-weight: bold;
`

export const SocialMediaContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const SocialMediaLogo = styled.img`
  height: 80%;
  padding-right: 10px;
`

export const Recommendations = styled.p`
  font-size: 14px;
`

export const VideosOverallContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    width: 84%;
  }
`

export const HomeVideosOverallContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
`

export const NotFoundImage = styled.img`
  width: 70%;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 40%;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.colorText};
`
export const NotFoundText = styled.p`
  font-size: 16px;
  color: ${props => props.colorText};
  margin-top: 0px;
  align-self: center;
  text-align: center;
`
