import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context'
import {
  LoginOverallBgContainer,
  LoginContainer,
  LoginLogoImage,
  FormContainer,
  LoginLabel,
  LoginInput,
  ShowPasswordContainer,
  ShowPasswordCheckBox,
  ShowPasswordText,
  LoginButton,
  ErrorText,
} from './styledComponents'

class Login extends Component {
  state = {
    userName: '',
    password: '',
    isCheckedPassword: false,
    errorMsg: '',
    showSubmitError: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 20, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {userName, password} = this.state

    const userDetails = {
      username: userName,
      password,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({errorMsg: ''})
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowHidePassword = () => {
    this.setState(prevState => ({
      isCheckedPassword: !prevState.isCheckedPassword,
    }))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {
      userName,
      password,
      isCheckedPassword,
      errorMsg,
      showSubmitError,
    } = this.state

    const passwordType = isCheckedPassword ? 'text' : 'password'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          let websiteLogo
          let bgColorOverall
          let bgColorLoginCard
          let color

          if (isDarkTheme) {
            websiteLogo =
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            bgColorOverall = '#424242'
            bgColorLoginCard = '#0f0f0f'
            color = '#f9f9f9'
          } else {
            websiteLogo =
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            bgColorOverall = '#f9f9f9'
            bgColorLoginCard = '#ffffff'
            color = '#0f0f0f'
          }

          return (
            <LoginOverallBgContainer overallBgColor={bgColorOverall}>
              <LoginContainer bgColorCard={bgColorLoginCard} textColor={color}>
                <LoginLogoImage src={websiteLogo} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <LoginLabel htmlFor="username">USERNAME</LoginLabel>
                  <LoginInput
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={userName}
                    onChange={this.onChangeUsername}
                  />
                  <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
                  <LoginInput
                    type={passwordType}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <ShowPasswordContainer>
                    <ShowPasswordCheckBox
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onShowHidePassword}
                      checked={isCheckedPassword}
                    />
                    <ShowPasswordText htmlFor="showPassword">
                      Show Password
                    </ShowPasswordText>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorText>*{errorMsg}</ErrorText>}
                </FormContainer>
              </LoginContainer>
            </LoginOverallBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
