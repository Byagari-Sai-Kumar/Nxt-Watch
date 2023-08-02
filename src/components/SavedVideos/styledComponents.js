import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SavedVideosOverallBgContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.background};
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
export const SavedVideosOverallContainer = styled.div`
  width: 100%;
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
  background-color: ${props => props.background};
  @media (min-width: 768px) {
    height: 15vh;
  }
`
export const TrendingImageContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${props => props.background};
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
export const TrendingVideosUnorderedListContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  background-color: ${props => props.background};
  color: ${props => props.text};
`

export const VideoContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20px;
    margin-bottom: 15px;
  }
`
export const LinkVideo = styled(Link)`
  text-decoration: none;
  width: 100%;
  background-color: ${props => props.background};
  color: ${props => props.text};
`

export const VideoThumbnailImage = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }
`
export const VideoDescriptionOverallContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  @media (min-width: 768px) {
    width: 60%;
  }
`
export const VideoDescriptionContainer1 = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
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
    font-size: 20px;
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
export const NoSavedVideosImage = styled.img`
  width: 70%;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 30%;
  }
`
export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`
export const NoSavedVideosPara = styled.p`
  font-size: 16px;
  color: ${props => props.color};
  margin-top: 0px;
  align-self: center;
  text-align: center;
`
