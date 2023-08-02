import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingOverallBgContainer = styled.div`
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
export const TrendingBannerAndVideosOverallContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    width: 85%;
  }
`
export const TrendingBannerContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  background-color: ${props => props.bgColor};
  @media (min-width: 768px) {
    height: 15vh;
  }
`
export const TrendingImageContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  padding-left: 10px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`
export const GamingUnorderedListContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`

export const GameContainer = styled.li`
  width: 100%;
`

export const LinkImage = styled(Link)`
  width: 45%;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  text-decoration: none;
`

export const GamingThumbnailImage = styled.img`
  width: 100%;
`

export const GameName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0px;
`
export const ViewsCount = styled.p`
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 20px;
`

export const NoSearchResultImage = styled.img`
  width: 40%;
  margin-top: 20px;
`
export const NoSearchResultHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.colorText};
`
export const RemoveFiltersText = styled.p`
  font-size: 16px;
  color: ${props => props.colorText};
  margin-top: 0px;
  align-self: center;
  text-align: center;
`
export const NoSearchRetryButton = styled.button`
  height: 35px;
  width: 100px;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 25px;
`
