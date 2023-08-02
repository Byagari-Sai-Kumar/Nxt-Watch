import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  showHomeBanner: true,
  savedVideosList: [],
  toggleTheme: () => {},
  changeActiveTab: () => {},
  changeShowHomeBanner: () => {},
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default ThemeContext
