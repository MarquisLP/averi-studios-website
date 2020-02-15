import React, { useRef, useEffect, useState } from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Intro from './Intro'
import Apps from './apps/Apps'
import Announcements from './announcements/Announcements'
import Footer from './Footer'
import NavigationDrawer from './NavigationDrawer'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'

import { Menu as MenuIcon } from '@material-ui/icons'

const drawerWidth = 240
const mobileScreenMaxWidth = 768

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
    announcements: useRef(null)
  }

  const [drawerIsOpen, setDrawerIsOpen] = useState(true)
  const [screenIsMobile, setScreenIsMobile] = useState(false)
  const [lastDrawerSelection, setLastDrawerSelection] = useState('intro')

  function scrollToRef (ref) {
    window.scrollTo(0, ref.current.offsetTop)

    if (screenIsMobile) {
      setDrawerIsOpen(false)
    }
  }

  function handleWindowResize () {
    if (window.innerWidth <= mobileScreenMaxWidth) {
      setDrawerIsOpen(false)
      setScreenIsMobile(true)
    } else {
      setDrawerIsOpen(true)
      setScreenIsMobile(false)
    }
  }

  function handleCloseDrawer () {
    setDrawerIsOpen(false)
  }

  function handleMenuButtonClick () {
    setDrawerIsOpen(true)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return function cleanup () {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  // There's a bug with Material UI's Navigation Drawer that causes the page to
  // scroll up a bit when the drawer is closed at the bottom of the page.
  // So this effect causes the window to scroll down to the footer after 'Contact' is selected.
  useEffect(() => {
    if ((!drawerIsOpen) && (lastDrawerSelection === 'contact')) {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }, [drawerIsOpen])

  // Check screen size and make adjustments on the first render.
  useEffect(() => {
    handleWindowResize()
  }, [])

  return (
    <ThemeProvider theme={appTheme}>
      <div
        className={classes.root}
      >
        {
          screenIsMobile
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
          variant={screenIsMobile ? 'temporary' : 'persistent'}
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
      </div>
    </ThemeProvider>
  )
}

export default Root
