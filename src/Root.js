import React, { useRef } from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Intro from './Intro'
import Apps from './apps/Apps'
import Announcements from './announcements/Announcements'
import Footer from './Footer'
import NavigationDrawer from './NavigationDrawer'
import clsx from 'clsx'

const drawerWidth = 240

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#27a4f3',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ffffff'
    },
    text: {
      secondary: '#ffffff'
    }
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: 0,
    padding: 0
  },
  content: {
    flexGrow: 1
  }
}))

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function Root () {
  const classes = useStyles()
  const sectionRefs = {
    intro: useRef(null),
    apps: useRef(null),
    announcements: useRef(null),
    footer: useRef(null)
  }

  let drawerIsOpen = true

  function setDrawerOpenState (isOpen) {
    drawerIsOpen = isOpen
  }

  return (
    <ThemeProvider theme={appTheme}>
      <div
        className={classes.root}
      >
        <NavigationDrawer
          drawerWidth={drawerWidth}
          isOpen={drawerIsOpen}
          setOpenState={setDrawerOpenState}
          sectionRefs={sectionRefs}
          scrollToRef={scrollToRef}
        />
        <main
          className={classes.content}
          ref={sectionRefs.intro}
        >
          <Intro />
          <div
            ref={sectionRefs.apps}
          >
            <Apps />
          </div>
          <div
            ref={sectionRefs.announcements}
          >
            <Announcements />
          </div>
          <div
            ref={sectionRefs.footer}
          >
            <Footer />
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Root
