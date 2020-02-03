import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Intro from './Intro'
import Apps from './apps/Apps'
import Announcements from './announcements/Announcements'
import Footer from './Footer'

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#27a4f3',
      contrastText: '#fff'
    },
    text: {
      secondary: '#ffffff'
    }
  }
})

function Root () {
  return (
    <ThemeProvider theme={appTheme}>
      <Intro />
      <Apps />
      <Announcements />
      <Footer />
    </ThemeProvider>
  )
}

export default Root
