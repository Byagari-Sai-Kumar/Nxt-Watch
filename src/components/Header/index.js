import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BsFillBrightnessHighFill, BsList} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {ImCancelCircle} from 'react-icons/im'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import NavItem from '../NavigationItems'
import ThemeContext from '../../context/index'
import {
  HeaderOverallContainer,
  WebsiteLogoImage,
  IconsContainer,
  IconButtons,
  ListIconButton,
  IconButtons2,
  ProfileLogoImage,
  LogoutButton,
  PopupOverallContainer,
  PopupContainer,
  PopupContainer2,
  CloseButton,
  PopupText,
  AlignButtons,
  CancelButton,
  ConfirmButton,
  LinkImage,
} from './styledComponents'

const Header = props => {
  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme, changeActiveTab} = value

        let logoImage
        let backgroundColor
        let color

        if (isDarkTheme) {
          logoImage =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          backgroundColor = '#231f20'
          color = '#ffffff'
        } else {
          logoImage =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          backgroundColor = '#ffffff'
          color = '#231f20'
        }

        const onChangeTheme = () => {
          toggleTheme()
        }

        const onClickWebsiteLogo = () => {
          changeActiveTab('Home')
        }

        return (
          <HeaderOverallContainer bgColor={backgroundColor} colors={color}>
            <LinkImage to="/">
              <WebsiteLogoImage
                src={logoImage}
                alt="website logo"
                onClick={onClickWebsiteLogo}
              />
            </LinkImage>
            <IconsContainer>
              <IconButtons
                type="button"
                data-testid="theme"
                onClick={onChangeTheme}
              >
                {isDarkTheme ? (
                  <BsFillBrightnessHighFill fontSize={22} color="white" />
                ) : (
                  <FaMoon fontSize={22} />
                )}
              </IconButtons>

              <PopupOverallContainer>
                <Popup
                  modal
                  trigger={
                    <ListIconButton
                      type="button"
                      data-testid="theme"
                      onClick={onClickLogoutButton}
                    >
                      <BsList
                        fontSize={22}
                        color={isDarkTheme ? '#ffffff' : '#000000'}
                      />
                    </ListIconButton>
                  }
                  position="top left"
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer2
                      bgColor={backgroundColor}
                      textColor={color}
                    >
                      <CloseButton
                        type="button"
                        color={isDarkTheme ? '#ffffff' : '#000000'}
                        onClick={() => close()}
                      >
                        <ImCancelCircle size={30} />
                      </CloseButton>
                      <NavItem />
                    </PopupContainer2>
                  )}
                </Popup>
              </PopupOverallContainer>

              <ProfileLogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <PopupOverallContainer>
                <Popup
                  modal
                  trigger={
                    <IconButtons2
                      type="button"
                      data-testid="iconButton"
                      onClick={onClickLogoutButton}
                    >
                      <FiLogOut
                        fontSize={22}
                        color={isDarkTheme ? '#ffffff' : '#000000'}
                      />
                    </IconButtons2>
                  }
                  position="top left"
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer bgColor={backgroundColor} textColor={color}>
                      <PopupText>Are you sure, you want to logout</PopupText>
                      <AlignButtons>
                        <CancelButton
                          type="button"
                          onClick={() => close()}
                          textColor={color}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          onClick={onClickLogoutButton}
                        >
                          Confirm
                        </ConfirmButton>
                      </AlignButtons>
                    </PopupContainer>
                  )}
                </Popup>
              </PopupOverallContainer>

              <PopupOverallContainer>
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      type="button"
                      onClick={onClickLogoutButton}
                      data-testid="Logout"
                    >
                      Logout
                    </LogoutButton>
                  }
                  position="top left"
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer bgColor={backgroundColor} textColor={color}>
                      <PopupText>Are you sure you want to logout?</PopupText>
                      <AlignButtons>
                        <CancelButton
                          type="button"
                          onClick={() => close()}
                          textColor={color}
                          data-testid="closeButton"
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          onClick={onClickLogoutButton}
                          data-testid="closeButton"
                        >
                          Confirm
                        </ConfirmButton>
                      </AlignButtons>
                    </PopupContainer>
                  )}
                </Popup>
              </PopupOverallContainer>
            </IconsContainer>
          </HeaderOverallContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
