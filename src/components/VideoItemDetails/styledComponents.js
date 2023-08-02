import styled from 'styled-components'

export const VideoItemDetailsOverallBgContainer = styled.div`
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
    width: 85%;
  }
`

export const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`

export const VideoPlayContainer = styled.div`
  width: 100%;
  height: 40vh;
  @media (min-width: 768px) {
    height: 60vh;
  }
`

export const VideoTitle = styled.p`
  font-size: 18px;
  padding-left: 10px;
  margin-bottom: 3px;
  align-self: flex-start;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewsIconsOverallContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewsUnorderedList = styled.ul`
  width: 50%;
  padding-left: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  @media (min-width: 768px) {
    width: 20%;
  }
`

export const ViewCountText = styled.p`
  font-size: 14px;
  margin-top: 0px;
`

export const LikesContainer = styled.div`
  width: 70%;
  padding-left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  @media (min-width: 768px) {
    width: 40%;
  }
`

export const LikesIconContainer = styled.button`
  min-width: 30%;
  height: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const HrLine = styled.hr`
  width: 98%;
  height: 1px;
  color: 383838;
`
export const ProfileOverallContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
`
export const ProfileImage = styled.img`
  width: 50px;
  padding-left: 10px;
  padding-top: 15px;
`
export const ChannelNameContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto';
`
export const ChannelName = styled.p`
  font-size: 17px;
  padding-left: 10px;
  margin-bottom: 0px;
`

export const SubscribersCount = styled.p`
  font-size: 12px;
  padding-left: 10px;
  margin-top: 3px;
`
export const Description = styled.p`
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
  align-self: flex-start;
  text-align: left;
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
