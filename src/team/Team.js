import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Grid } from '@material-ui/core'
import Profile from './Profile'
import teamMembers from '../assets/team_members'

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 50
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

function Team () {
  const classes = useStyles()

  const profiles = teamMembers.map((teamMember) => {
    return (
      <Grid
        // item xs={3}
        key={teamMember.id}
      >
        <Profile
          data={teamMember}
        />
      </Grid>
    )
  })

  return (
    <div
      className={classes.wrapper}
    >
      <div
        className={classes.content}
      >
        <Typography
          variant='h2'
        >
          <Box
            fontWeight='fontWeightBold'
          >
            Team
          </Box>
        </Typography>
      </div>
      <>
        <Grid
          container
          direction='row'
          justify='center'
        >
          {profiles}
        </Grid>
      </>
    </div>
  )
}

export default Team
