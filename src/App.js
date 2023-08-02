import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/index'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/Not Found'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
    showHomeBanner: true,
    savedVideosList: [],
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onChangeActiveTab = currentTab => {
    this.setState({activeTab: currentTab})
  }

  onChangeShowHomeBanner = () => {
    this.setState({showHomeBanner: false})
  }

  onAddingSavedVideo = videoData => {
    const {savedVideosList} = this.state

    const videoObject = savedVideosList.find(
      eachVideo => eachVideo.id === videoData.id,
    )

    if (videoObject) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList],
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoData],
      }))
    }
  }

  onRemovingSavedVideo = id => {
    const {savedVideosList} = this.state

    const filteredVideoList = savedVideosList.filter(
      eachVideo => eachVideo.id !== id,
    )

    this.setState({savedVideosList: filteredVideoList})
  }

  render() {
    const {isDarkTheme, activeTab, showHomeBanner, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          showHomeBanner,
          savedVideosList,
          toggleTheme: this.onToggleTheme,
          changeActiveTab: this.onChangeActiveTab,
          changeShowHomeBanner: this.onChangeShowHomeBanner,
          addSavedVideo: this.onAddingSavedVideo,
          removeSavedVideo: this.onRemovingSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
