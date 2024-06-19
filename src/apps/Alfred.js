import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, ExpansionPanelActions } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles({
  wrapper: {
    marginTop: 50
  },
  alfredIcon: {
    width: 250,
    height: 250
  },
  introRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    width: '100%'
  },
  websiteLink: {
    marginRight: 20
  }
})

function Alfred () {
  const classes = useStyles()

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
              Alfred
            </Typography>
            <Typography
              variant='subtitle1'
            >
              The helpful and tirelessly dedicated digital guru for your business
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div
            className={classes.introRow}
          >
            <img
              className={classes.alfredIcon}
              src={require('../assets/alfred_icon.png')}
              alt='Alfred logo'
            />
          </div>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Typography
            variant='subtitle1'
            className={classes.websiteLink}
          >
            <a style={{ color: 'blue', textDecoration: 'none', fontSize: '1.3em' }} href='https://hialfred.ca' rel='noopener noreferrer' target='_blank'><b>Click here to learn more!</b></a>
          </Typography>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  )
}

export default Alfred

