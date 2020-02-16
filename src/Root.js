import React, { useRef, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Intro from './Intro'
import Apps from './apps/Apps'
import Announcements from './announcements/Announcements'
import Footer from './Footer'
import NavigationDrawer from './NavigationDrawer'
import { AppBar, Toolbar, IconButton, Snackbar, Button } from '@material-ui/core'

import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons'

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

function Root () {
  const classes = useStyles()
  const sectionRefs = {
    intro: useRef(null),
    apps: useRef(null),
    announcements: useRef(null),
    footer: 'footer'
  }

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // Prevent page content from going off-screen on mobile devices
  if (isTabletOrMobile) {
    document.body.style.zoom = '75%'
  }

  const [drawerIsOpen, setDrawerIsOpen] = useState(!isTabletOrMobile) // Drawer is initially closed on mobile so that it doesn't get in the way
  const [lastDrawerSelection, setLastDrawerSelection] = useState('intro')
  const [betaNotificationIsOpen, setBetaNotificationIsOpen] = useState(true)

  function scrollToRef (ref) {
    if (ref === 'footer') {
      window.scrollTo(0, document.body.scrollHeight)
    } else {
      window.scrollTo(0, ref.current.offsetTop)
    }

    if (isTabletOrMobile) {
      setDrawerIsOpen(false)
    }
  }

  function handleCloseDrawer () {
    setDrawerIsOpen(false)
  }

  function handleMenuButtonClick () {
    setDrawerIsOpen(true)
  }

  function handleLearnMoreAboutBetaButtonClick () {
    scrollToRef(sectionRefs.announcements)
    setBetaNotificationIsOpen(false)
  }

  function handleCloseBetaNotification (e, reason) {
    if (reason !== 'clickaway') {
      setBetaNotificationIsOpen(false)
    }
  }

  // There's a bug with Material UI's Navigation Drawer that causes the page to
  // scroll up a bit when the drawer is closed at the bottom of the page.
  // So this effect causes the window to scroll down to the footer after 'Contact' is selected.
  useEffect(() => {
    if ((!drawerIsOpen) && (lastDrawerSelection === 'contact')) {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }, [drawerIsOpen])

  return (
    <ThemeProvider theme={appTheme}>
      <div
        className={classes.root}
      >
        {
          isTabletOrMobile
            ? (
              <AppBar
                position='fixed'
              >
                <Toolbar>
                  <IconButton
                    edge='start'
                    onClick={handleMenuButtonClick}
                  >
                    <MenuIcon
                      color='secondary'
                    />
                  </IconButton>
                </Toolbar>
              </AppBar>
            )
            : null
        }
        <NavigationDrawer
          drawerWidth={drawerWidth}
          isOpen={drawerIsOpen}
          setOpenState={setDrawerIsOpen}
          sectionRefs={sectionRefs}
          scrollToRef={scrollToRef}
          variant={isTabletOrMobile ? 'temporary' : 'persistent'}
          onClose={handleCloseDrawer}
          setLastSelection={setLastDrawerSelection}
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
          <div>
            <Footer />
          </div>
        </main>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={betaNotificationIsOpen}
          autoHideDuration={10000}
          onClose={handleCloseBetaNotification}
          message='A new version of World Scribe is coming to the web! You can help out by becoming a beta tester.'
          action={
            <>
              <Button
                color='primary'
                size='small'
                onClick={handleLearnMoreAboutBetaButtonClick}
              >
                LEARN MORE
              </Button>
              <IconButton
                onClick={handleCloseBetaNotification}
              >
                <CloseIcon
                  fontSize='small'
                  color='secondary'
                />
              </IconButton>
            </>
          }
        />
      </div>
    </ThemeProvider>
  )
}

export default Root
