import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeOverallBgContainer = styled.div`
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
export const HomeTopBannerContainer = styled.div`
  width: 100%;
  height: 40%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.showBanner};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Roboto';
  color: #1e293b;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
`
export const BannerContainerSection1 = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
`
export const BannerWebsiteLogo = styled.img`
  width: 30%;
  @media (min-width: 768px) {
    width: 15%;
  }
`
export const BannerText = styled.p`
  font-size: 20px;
`
export const BannerButton = styled.button`
  width: 120px;
  height: 35px;
  border: 2px solid #475569;
  border-radius: 5px;
  color: #475569;
  font-size: 14px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`
export const BannerCloseButton = styled.button`
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomeSearchContainer = styled.div`
  width: 95%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #7e858e;
  background-color: ${props => props.bgColor};
  margin-top: 10px;
  @media (min-width: 768px) {
    width: 60%;
    align-self: flex-start;
  }
`
export const HomeSearchInput = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  border-right: 1px solid #7e868e;
  padding-left: 10px;
  color: ${props => props.color};
  font-size: 13px;
  outline: none;
  background: none;
`
export const HomeSearchButton = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const HomeVideosOverallContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const HomeVideosUnorderedListContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`

export const VideoContainer = styled.li`
  width: 100%;
`

export const LinkVideo = styled(Link)`
  text-decoration: none;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  @media (min-width: 768px) {
    width: 300px;
    margin: 10px;
  }
`

export const VideoThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDescriptionOverallContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`
export const VideoDescriptionContainer1 = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoThumbnailImage1 = styled.img`
  width: 70%;
`

export const VideoDescriptionContainer2 = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 0px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
export const ChannelViewsOverallContainer = styled.ul`
  width: 100%;
  padding-left: 0px;
  list-style-type: none;
  font-family: 'Roboto';
  font-size: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ChannelName = styled.p`
  font-size: 12px;
  margin-top: 0px;
`
export const ViewsDate = styled.p`
  font-size: 12px;
  padding-left: 10px;
  margin-top: 0px;
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
