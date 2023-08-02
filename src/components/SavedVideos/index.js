import {AiFillFire} from 'react-icons/ai'
import Header from '../Header/index'
import NavItem from '../NavigationItems/index'
import ThemeContext from '../../context'
import {
  SavedVideosOverallBgContainer,
  NavItemsAndAllVideosContainer,
  NavItemsContainer,
  NavItemsBottomContainer,
  ContactUsText,
  SocialMediaContainer,
  SocialMediaLogo,
  Recommendations,
  SavedVideosOverallContainer,
  TrendingBannerContainer,
  TrendingImageContainer,
  TrendingText,
  TrendingVideosUnorderedListContainer,
  VideoContainer,
  LinkVideo,
  VideoThumbnailImage,
  VideoDescriptionOverallContainer,
  VideoDescriptionContainer1,
  VideoThumbnailImage1,
  VideoDescriptionContainer2,
  VideoTitle,
  ChannelViewsOverallContainer,
  ChannelName,
  ViewsDate,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosPara,
} from './styledComponents'

const SavedVideos = () => {
  const renderSuccessView = (isDarkTheme, savedVideosList) => {
    const background = isDarkTheme ? '#181818' : '#f9f9f9'
    const color = isDarkTheme ? '#f9f9f9' : '#181818'

    return savedVideosList.length > 0 ? (
      <>
        <TrendingBannerContainer
          background={isDarkTheme ? '#424242' : '#f1f1f1'}
        >
          <TrendingImageContainer
            background={isDarkTheme ? '#0f0f0f' : '#cbd5e1'}
          >
            <AiFillFire size={20} color="#ff0b37" />
          </TrendingImageContainer>
          <TrendingText color={isDarkTheme ? '#ffffff' : '#313131'}>
            Saved Videos
          </TrendingText>
        </TrendingBannerContainer>
        <TrendingVideosUnorderedListContainer
          background={background}
          text={color}
        >
          {savedVideosList.map(eachVideo => (
            <LinkVideo
              to={`/videos/${eachVideo.id}`}
              background={background}
              text={color}
            >
              <VideoContainer key={eachVideo.id}>
                <VideoThumbnailImage
                  src={eachVideo.thumbnailImageUrl}
                  alt="video thumbnail"
                />
                <VideoDescriptionOverallContainer>
                  <VideoDescriptionContainer1>
                    <VideoThumbnailImage1
                      src={eachVideo.channelProfileImageUrl}
                      alt="channel logo"
                    />
                  </VideoDescriptionContainer1>
                  <VideoDescriptionContainer2>
                    <VideoTitle>{eachVideo.title}</VideoTitle>
                    <ChannelViewsOverallContainer>
                      <ChannelName>{eachVideo.channelName}</ChannelName>
                      <ViewsDate>{eachVideo.viewCount} views</ViewsDate>
                      <ViewsDate>{eachVideo.publishedAt}</ViewsDate>
                    </ChannelViewsOverallContainer>
                  </VideoDescriptionContainer2>
                </VideoDescriptionOverallContainer>
              </VideoContainer>
            </LinkVideo>
          ))}
        </TrendingVideosUnorderedListContainer>
      </>
    ) : (
      <>
        <NoSavedVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <NoSavedVideosHeading color={isDarkTheme ? '#f9f9f9' : '#181818'}>
          No saved videos found
        </NoSavedVideosHeading>
        <NoSavedVideosPara color={isDarkTheme ? '#f9f9f9' : '#181818'}>
          You can save your videos while watching them
        </NoSavedVideosPara>
      </>
    )
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value

        return (
          <SavedVideosOverallBgContainer
            data-testid="savedVideos"
            background={isDarkTheme ? '#0f0f0f ' : '#f9f9f9'}
          >
            <Header />
            <NavItemsAndAllVideosContainer>
              <NavItemsContainer>
                <NavItem />
                <NavItemsBottomContainer
                  color={isDarkTheme ? '#f9f9f9' : '#181818'}
                >
                  <ContactUsText>CONTACT US</ContactUsText>
                  <SocialMediaContainer>
                    <SocialMediaLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <SocialMediaLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <SocialMediaLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </SocialMediaContainer>
                  <Recommendations>
                    Enjoy! Now to see your channels and recommendations!
                  </Recommendations>
                </NavItemsBottomContainer>
              </NavItemsContainer>
              <SavedVideosOverallContainer>
                {renderSuccessView(isDarkTheme, savedVideosList)}
              </SavedVideosOverallContainer>
            </NavItemsAndAllVideosContainer>
          </SavedVideosOverallBgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
