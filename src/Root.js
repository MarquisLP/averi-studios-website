import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Intro from './Intro'

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
    </ThemeProvider>
  )
}

export default Root
