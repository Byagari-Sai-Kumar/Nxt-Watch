import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {HiOutlineSaveAs} from 'react-icons/hi'
import Header from '../Header/index'
import NavItem from '../NavigationItems/index'
import ThemeContext from '../../context'
import {
  VideoItemDetailsOverallBgContainer,
  NavItemsAndAllVideosContainer,
  NavItemsContainer,
  NavItemsBottomContainer,
  ContactUsText,
  SocialMediaContainer,
  SocialMediaLogo,
  Recommendations,
  VideosOverallContainer,
  VideoContainer,
  VideoPlayContainer,
  VideoTitle,
  ViewsIconsOverallContainer,
  ViewsUnorderedList,
  ViewCountText,
  LikesContainer,
  LikesIconContainer,
  HrLine,
  ProfileOverallContainer,
  ProfileImage,
  ChannelNameContainer,
  ChannelName,
  SubscribersCount,
  Description,
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

class VideoItemDetails extends Component {
  state = {
    videoItemData: {},
    apiStatus: apiStatusConstants.initial,
    isLike: false,
    isDislike: false,
    isVideoSaved: false,
  }

  componentDidMount() {
    this.getVideoItemsData()
  }

  getVideoItemsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedVideosData = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: formatDistanceToNow(
          new Date(data.video_details.published_at),
        ),
        thumbnailImageUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }

      this.setState({
        videoItemData: updatedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickedLikeButton = () => {
    const {isDislike} = this.state

    if (isDislike === false) {
      this.setState({isLike: true})
    } else {
      this.setState({isLike: true, isDislike: false})
    }
  }

  onClickedDislikeButton = () => {
    const {isLike} = this.state

    if (isLike === false) {
      this.setState({isDislike: true})
    } else {
      this.setState({isDislike: true, isLike: false})
    }
  }

  renderLoadingView = color => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color={color} height="50" width="50" />
    </div>
  )

  renderSuccessView = (isDarkTheme, bgColor, color, onClickSaveButton) => {
    const {videoItemData, isLike, isDislike, isVideoSaved} = this.state
    const {
      // eslint-disable-next-line
      id,
      description,
      publishedAt,
      // eslint-disable-next-line
      thumbnailImageUrl,
      title,
      viewCount,
      videoUrl,
      channelName,
      profileImageUrl,
      subscriberCount,
    } = videoItemData

    return (
      <VideoContainer backgroundColor={bgColor} color={color}>
        <VideoPlayContainer>
          <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        </VideoPlayContainer>
        <VideoTitle>{title}</VideoTitle>
        <ViewsIconsOverallContainer>
          <ViewsUnorderedList>
            <ViewCountText>{viewCount} views</ViewCountText>
            <ViewCountText>{publishedAt}</ViewCountText>
          </ViewsUnorderedList>
          <LikesContainer>
            <LikesIconContainer
              type="button"
              color={isLike ? '#2563eb' : '#64748b'}
              onClick={this.onClickedLikeButton}
            >
              <AiOutlineLike size={20} />
              Like
            </LikesIconContainer>

            <LikesIconContainer
              type="button"
              color={isDislike ? '#2563eb' : '#64748b'}
              onClick={this.onClickedDislikeButton}
            >
              <BiDislike size={20} />
              Dislike
            </LikesIconContainer>

            <LikesIconContainer
              type="button"
              color={isVideoSaved ? '#2563eb' : '#64748b'}
              onClick={onClickSaveButton}
            >
              <HiOutlineSaveAs size={20} />
              {isVideoSaved ? 'Saved' : 'Save'}
            </LikesIconContainer>
          </LikesContainer>
        </ViewsIconsOverallContainer>
        <HrLine />
        <ProfileOverallContainer>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <ChannelNameContainer>
            <ChannelName>{channelName}</ChannelName>
            <SubscribersCount>{subscriberCount}</SubscribersCount>
          </ChannelNameContainer>
        </ProfileOverallContainer>
        <Description>{description}</Description>
      </VideoContainer>
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
      this.getVideoItemsData()
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

  renderVideoItemDetailsViews = (theme, onClickSaveButton) => {
    const {apiStatus} = this.state

    const bgColor = theme ? '#181818' : '#f9f9f9'
    const color = theme ? '#f9f9f9' : '#181818'

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(color)
      case apiStatusConstants.success:
        return this.renderSuccessView(theme, bgColor, color, onClickSaveButton)
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
          const {isDarkTheme, addSavedVideo, removeSavedVideo} = value

          const {videoItemData, isVideoSaved} = this.state

          const addOrRemoveItem = () => {
            if (isVideoSaved === true) {
              removeSavedVideo(videoItemData.id)
            } else {
              addSavedVideo(videoItemData)
            }
          }

          const onClickSaveButton = () => {
            this.setState(
              prevState => ({
                isVideoSaved: !prevState.isVideoSaved,
              }),
              addOrRemoveItem,
            )
          }

          return (
            <VideoItemDetailsOverallBgContainer
              data-testid="videoItemDetails"
              bgColor={isDarkTheme ? '#0f0f0f ' : '#f9f9f9'}
            >
              <Header />
              <NavItemsAndAllVideosContainer>
                <NavItemsContainer>
                  <NavItem onChangeActiveTab={this.onChangeActiveTab} />
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
                  {this.renderVideoItemDetailsViews(
                    isDarkTheme,
                    onClickSaveButton,
                  )}
                </VideosOverallContainer>
              </NavItemsAndAllVideosContainer>
            </VideoItemDetailsOverallBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
