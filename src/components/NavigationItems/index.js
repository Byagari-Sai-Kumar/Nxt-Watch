import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  NavItemsTopContainer,
  LinkItem,
  ListItem,
  NavText,
} from './styledComponents'
import ThemeContext from '../../context/index'

class NavItem extends Component {
  renderTabsView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeActiveTab} = value

        const onClickHomeTab = () => {
          changeActiveTab('Home')
        }

        const onClickTrendingTab = () => {
          changeActiveTab('Trending')
        }

        const onClickGamingTab = () => {
          changeActiveTab('Gaming')
        }

        const onClickSavedVideosTab = () => {
          changeActiveTab('Saved videos')
        }

        return (
          <NavItemsTopContainer
            bgColor={isDarkTheme ? '#0f0f0f' : 'transparent'}
          >
            <LinkItem to="/">
              <ListItem
                onClick={onClickHomeTab}
                color={activeTab === 'Home' ? '#ff0000' : '#7e858e'}
                bgColor={activeTab === 'Home' ? '#d7dfe9' : 'transparent'}
              >
                <AiFillHome size={14} />
                <NavText>Home</NavText>
              </ListItem>
            </LinkItem>

            <LinkItem to="/trending">
              <ListItem
                onClick={onClickTrendingTab}
                color={activeTab === 'Trending' ? '#ff0000' : '#7e858e'}
                bgColor={activeTab === 'Trending' ? '#d7dfe9' : 'transparent'}
              >
                <AiFillFire size={14} />
                <NavText>Trending</NavText>
              </ListItem>
            </LinkItem>

            <LinkItem to="/gaming">
              <ListItem
                onClick={onClickGamingTab}
                color={activeTab === 'Gaming' ? '#ff0000' : '#7e858e'}
                bgColor={activeTab === 'Gaming' ? '#d7dfe9' : 'transparent'}
              >
                <SiYoutubegaming size={14} />
                <NavText>Gaming</NavText>
              </ListItem>
            </LinkItem>

            <LinkItem to="/saved-videos">
              <ListItem
                onClick={onClickSavedVideosTab}
                color={activeTab === 'Saved videos' ? '#ff0000' : '#7e858e'}
                bgColor={
                  activeTab === 'Saved videos' ? '#d7dfe9' : 'transparent'
                }
              >
                <MdPlaylistAdd size={13} />
                <NavText>Saved videos</NavText>
              </ListItem>
            </LinkItem>
          </NavItemsTopContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return <>{this.renderTabsView()}</>
  }
}

export default NavItem
