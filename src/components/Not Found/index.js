import Header from '../Header/index'
import NavItem from '../NavigationItems/index'
import ThemeContext from '../../context'
import {
  NotFoundOverallBgContainer,
  NavItemsAndAllVideosContainer,
  NavItemsContainer,
  NavItemsBottomContainer,
  ContactUsText,
  SocialMediaContainer,
  SocialMediaLogo,
  Recommendations,
  VideosOverallContainer,
  HomeVideosOverallContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeActiveTab} = value

      let notFoundImage

      if (isDarkTheme === false) {
        notFoundImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      } else {
        notFoundImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      }

      const onChangeActiveTab = (currentTab = 'Home') => {
        changeActiveTab(currentTab)
      }
      return (
        <NotFoundOverallBgContainer
          data-testid="notFound"
          bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}
        >
          <Header />
          <NavItemsAndAllVideosContainer>
            <NavItemsContainer>
              <NavItem onChangeActiveTab={onChangeActiveTab} />
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
              <HomeVideosOverallContainer
                color={isDarkTheme ? '#f9f9f9' : '#181818'}
              >
                <NotFoundImage src={notFoundImage} alt="not found" />
                <NotFoundHeading>Page Not Found</NotFoundHeading>
                <NotFoundText>
                  we are sorry, the page you requested could not be found.
                </NotFoundText>
              </HomeVideosOverallContainer>
            </VideosOverallContainer>
          </NavItemsAndAllVideosContainer>
        </NotFoundOverallBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
