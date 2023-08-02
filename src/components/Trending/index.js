import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header/index'
import NavItem from '../NavigationItems/index'
import ThemeContext from '../../context'
import {
  TrendingOverallBgContainer,
  NavItemsAndAllVideosContainer,
  NavItemsContainer,
  NavItemsBottomContainer,
  ContactUsText,
  SocialMediaContainer,
  SocialMediaLogo,
  Recommendations,
  TrendingBannerAndVideosOverallContainer,
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
  NoSearchResultImage,
  NoSearchResultHeading,
  RemoveFiltersText,
  NoSearchRetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedVideosData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailImageUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        publishedAt: formatDistanceToNow(new Date(eachVideo.published_at)),
        channelName: eachVideo.channel.name,
        channelProfileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        trendingVideosList: updatedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = color => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color={color} height="50" width="50" />
    </div>
  )

  renderSuccessView = (isDarkTheme, bgColor, color) => {
    const {trendingVideosList} = this.state

    return (
      <>
        <TrendingBannerContainer bgColor={isDarkTheme ? '#424242' : '#f1f1f1'}>
          <TrendingImageContainer bgColor={isDarkTheme ? '#0f0f0f' : '#cbd5e1'}>
            <AiFillFire size={20} color="#ff0b37" />
          </TrendingImageContainer>
          <TrendingText color={isDarkTheme ? '#ffffff' : '#313131'}>
            Trending
          </TrendingText>
        </TrendingBannerContainer>
        <TrendingVideosUnorderedListContainer
          backgroundColor={bgColor}
          textColor={color}
        >
          {trendingVideosList.map(eachVideo => (
            <LinkVideo
              to={`/videos/${eachVideo.id}`}
              backgroundColor={bgColor}
              textColor={color}
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
    )
  }

  renderFailureView = (theme, bgColor, color) => {
    let failureImage

    if (theme === false) {
      failureImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    } else {
      failureImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    }

    const onClickSearchRetry = () => {
      this.getTrendingVideosData()
    }

    return (
      <>
        <NoSearchResultImage src={failureImage} alt="failure view" />
        <NoSearchResultHeading colorText={color}>
          Oops! Something Went Wrong
        </NoSearchResultHeading>
        <RemoveFiltersText colorText={color}>
          We are having some trouble to complete your request. Please try again.
        </RemoveFiltersText>
        <NoSearchRetryButton type="button" onClick={onClickSearchRetry}>
          Retry
        </NoSearchRetryButton>
      </>
    )
  }

  renderTrendingViews = theme => {
    const {apiStatus} = this.state

    const bgColor = theme ? '#181818' : '#f9f9f9'
    const color = theme ? '#f9f9f9' : '#181818'

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(color)
      case apiStatusConstants.success:
        return this.renderSuccessView(theme, bgColor, color)
      case apiStatusConstants.failure:
        return this.renderFailureView(theme, bgColor, color)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <TrendingOverallBgContainer
              data-testid="trending"
              bgColor={isDarkTheme ? '#0f0f0f ' : '#f9f9f9'}
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
                <TrendingBannerAndVideosOverallContainer>
                  {this.renderTrendingViews(isDarkTheme)}
                </TrendingBannerAndVideosOverallContainer>
              </NavItemsAndAllVideosContainer>
            </TrendingOverallBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
