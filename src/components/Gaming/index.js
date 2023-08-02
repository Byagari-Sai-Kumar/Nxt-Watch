import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header/index'
import NavItem from '../NavigationItems/index'
import ThemeContext from '../../context'
import {
  GamingOverallBgContainer,
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
  GamingUnorderedListContainer,
  GameContainer,
  LinkImage,
  GamingThumbnailImage,
  GameName,
  ViewsCount,
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

class Gaming extends Component {
  state = {GamingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
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
      }))

      this.setState({
        GamingVideosList: updatedVideosData,
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
    const {GamingVideosList} = this.state

    return (
      <>
        <TrendingBannerContainer bgColor={isDarkTheme ? '#424242' : '#f1f1f1'}>
          <TrendingImageContainer bgColor={isDarkTheme ? '#0f0f0f' : '#cbd5e1'}>
            <SiYoutubegaming size={20} color="#ff0b37" />
          </TrendingImageContainer>
          <TrendingText color={isDarkTheme ? '#ffffff' : '#313131'}>
            Gaming
          </TrendingText>
        </TrendingBannerContainer>
        <GamingUnorderedListContainer
          backgroundColor={bgColor}
          textColor={color}
        >
          {GamingVideosList.map(eachVideo => (
            <LinkImage
              to={`/videos/${eachVideo.id}`}
              backgroundColor={bgColor}
              textColor={color}
            >
              <GameContainer key={eachVideo.id}>
                <GamingThumbnailImage
                  src={eachVideo.thumbnailImageUrl}
                  alt="video thumbnail"
                />
                <GameName>{eachVideo.title}</GameName>
                <ViewsCount>
                  {eachVideo.viewCount} Watching Worldwide
                </ViewsCount>
              </GameContainer>
            </LinkImage>
          ))}
        </GamingUnorderedListContainer>
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
      this.getGamingVideosData()
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
            <GamingOverallBgContainer
              data-testid="gaming"
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
            </GamingOverallBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
