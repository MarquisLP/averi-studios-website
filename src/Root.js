import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Intro from './Intro'
import Apps from './apps/Apps'

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#27a4f3',
      contrastText: '#fff'
    }
  }
})

function Root () {
  return (
    <ThemeProvider theme={appTheme}>
      <Intro />
      <Apps />
    </ThemeProvider>
  )
}

export default Root
