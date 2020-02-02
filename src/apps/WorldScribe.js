import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, ExpansionPanelActions, IconButton, Tooltip } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import GitHubIcon from '@material-ui/icons/GitHub'
import WorldScribeIcon from '../assets/world_scribe_icon.svg'

const useStyles = makeStyles({
  wrapper: {
    marginTop: 50
  },
  worldScribeIcon: {
    width: 250,
    height: 250
  },
  introRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10
  },
  storeButtonColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  storeButton: {
    cursor: 'pointer'
  }
})

function WorldScribe () {
  const classes = useStyles()

  function handleViewSourceButtonClick (e) {
    window.open('https://github.com/MarquisLP/World-Scribe', '_blank')
  }

  function handleFDroidButtonClick (e) {
    window.open('https://f-droid.org/packages/com.averi.worldscribe/', '_blank')
  }

  function handlePlayStoreButtonClick (e) {
    window.open('https://play.google.com/store/apps/details?id=com.averi.worldscribe', '_blank')
  }

  return (
    <div
      className={classes.wrapper}
    >
      <ExpansionPanel
        defaultExpanded
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <div>
            <Typography
              variant='h3'
            >
              World Scribe
            </Typography>
            <Typography
              variant='subtitle1'
            >
              An Android app for fictional worldbuilding
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div
            className={classes.introRow}
          >
            <div
              className={classes.storeButtonColumn}
            >
              <img
                className={classes.storeButton}
                src='https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png'
                alt='Get it on Google Play'
                height='90'
                onClick={handlePlayStoreButtonClick}
              />
              <img
                className={classes.storeButton}
                src='https://f-droid.org/badge/get-it-on.png'
                alt='Get it on F-Droid'
                height='90'
                onClick={handleFDroidButtonClick}
              />
            </div>
            <img
              className={classes.worldScribeIcon}
              src={WorldScribeIcon}
              alt='World Scribe Logo'
            />
          </div>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Tooltip
            title='View Source'
          >
            <IconButton
              onClick={handleViewSourceButtonClick}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  )
}

export default WorldScribe
