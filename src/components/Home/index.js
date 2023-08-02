import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {IoMdClose} from 'react-icons/io'
import {BiSearch} from 'react-icons/bi'
import Header from '../Header/index'
import NavItem from '../NavigationItems/index'
import ThemeContext from '../../context'
import {
  HomeOverallBgContainer,
  NavItemsAndAllVideosContainer,
  NavItemsContainer,
  NavItemsBottomContainer,
  ContactUsText,
  SocialMediaContainer,
  SocialMediaLogo,
  Recommendations,
  VideosOverallContainer,
  HomeTopBannerContainer,
  BannerContainerSection1,
  BannerWebsiteLogo,
  BannerText,
  BannerButton,
  BannerCloseButton,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearchButton,
  HomeVideosOverallContainer,
  HomeVideosUnorderedListContainer,
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

class Home extends Component {
  state = {
    searchValue: '',
    searchInput: '',
    homeVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosData()
  }

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state

    this.setState({searchValue: searchInput}, this.getVideosData)
  }

  updateOnEnterButton = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchValue: searchInput}, this.getVideosData)
    }
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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
        homeVideosList: updatedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideosLoadingView = color => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color={color} height="50" width="50" />
    </div>
  )

  renderVideosSuccessView = (bgColor, color) => {
    const {homeVideosList} = this.state

    const onClickSearchRetry = () => {
      this.setState({searchValue: '', searchInput: ''}, this.getVideosData)
    }

    return homeVideosList.length !== 0 ? (
      <HomeVideosUnorderedListContainer
        backgroundColor={bgColor}
        textColor={color}
      >
        {homeVideosList.map(eachVideo => (
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
      </HomeVideosUnorderedListContainer>
    ) : (
      <>
        <NoSearchResultImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchResultHeading colorText={color}>
          No Search results found
        </NoSearchResultHeading>
        <RemoveFiltersText colorText={color}>
          Try different key words or remove search filter
        </RemoveFiltersText>
        <NoSearchRetryButton type="button" onClick={onClickSearchRetry}>
          Retry
        </NoSearchRetryButton>
      </>
    )
  }

  renderVideosFailureView = (theme, bgColor, color) => {
    let failureImage

    if (theme === false) {
      failureImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    } else {
      failureImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    }

    const onClickSearchRetry = () => {
      this.setState({searchValue: '', searchInput: ''}, this.getVideosData)
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

  renderHomeViews = theme => {
    const {apiStatus} = this.state

    const bgColor = theme ? '#181818' : '#f9f9f9'
    const color = theme ? '#f9f9f9' : '#181818'

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderVideosLoadingView(color)
      case apiStatusConstants.success:
        return this.renderVideosSuccessView(bgColor, color)
      case apiStatusConstants.failure:
        return this.renderVideosFailureView(theme, bgColor, color)
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, showHomeBanner, changeShowHomeBanner} = value

          const onClickBannerClose = () => {
            changeShowHomeBanner()
          }

          const displayHomeBanner = showHomeBanner ? 'flex' : 'none'

          return (
            <HomeOverallBgContainer
              data-testid="home"
              bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}
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
                <VideosOverallContainer>
                  <HomeTopBannerContainer
                    data-testid="banner"
                    showBanner={displayHomeBanner}
                  >
                    <BannerContainerSection1>
                      <BannerWebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainerSection1>
                    <BannerCloseButton
                      data-testid="close"
                      type="button"
                      onClick={onClickBannerClose}
                    >
                      <IoMdClose size={25} />
                    </BannerCloseButton>
                  </HomeTopBannerContainer>
                  <HomeSearchContainer
                    bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}
                  >
                    <HomeSearchInput
                      type="search"
                      placeholder="Search"
                      color={isDarkTheme ? '#f9f9f9' : '#7e868e'}
                      onChange={this.updateSearchInput}
                      value={searchInput}
                      onKeyDown={this.updateOnEnterButton}
                    />
                    <HomeSearchButton
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearchButton}
                    >
                      <BiSearch size={22} color="#7e868e" />
                    </HomeSearchButton>
                  </HomeSearchContainer>
                  <HomeVideosOverallContainer>
                    {this.renderHomeViews(isDarkTheme)}
                  </HomeVideosOverallContainer>
                </VideosOverallContainer>
              </NavItemsAndAllVideosContainer>
            </HomeOverallBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
