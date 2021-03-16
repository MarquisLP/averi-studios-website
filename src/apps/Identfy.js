import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, ExpansionPanelActions } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AppStoreIcon from '../assets/app_store_icon.svg'

const useStyles = makeStyles({
  wrapper: {
    marginTop: 50
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
  },
  websiteLink: {
    marginRight: 20
  }
})

function Identfy () {
  const classes = useStyles()

  function handleAppStoreButtonClick (e) {
    window.open('https://apps.apple.com/us/app/iden-t-fy/id1538517925', '_blank')
  }

  function handlePlayStoreButtonClick (e) {
    window.open('https://play.google.com/store/apps/details?id=com.averi.iden_t_fy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1', '_blank')
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
              iden-T-fy
            </Typography>
            <Typography
              variant='subtitle1'
            >
              Digital ID profiles for clubs and organizations
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
                src={AppStoreIcon}
                alt='Download it on the App Store'
                height='68'
                onClick={handleAppStoreButtonClick}
              />
              <img
                className={classes.storeButton}
                src='https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png'
                alt='Get it on Google Play'
                height='90'
                onClick={handlePlayStoreButtonClick}
              />
            </div>
            <img
              src={require('../assets/iden-t-fy_icon.png')}
              alt='iden-T-fy Logo'
            />
          </div>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Typography
            variant='subtitle1'
            className={classes.websiteLink}
          >
            <a style={{ color: 'blue', textDecoration: 'none', fontSize: '1.3em' }} href='www.iden-t-fy.com' target='_blank'><b>Click here to learn more!</b></a>
          </Typography>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  )
}

export default Identfy
