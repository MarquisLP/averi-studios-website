import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Grid } from '@material-ui/core'
import Profile from './Profile'
import currentTeamMembers from '../assets/current_team_members'
import alumni from '../assets/alumni'

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: '50px 50px 70px 50px'
  },
  currentTeam: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  alumni: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60
  }
})

function Team () {
  const classes = useStyles()

  const currentTeamMemberProfiles = currentTeamMembers.map((teamMember) => {
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
  
  const alumniProfiles = alumni.map((alumnus) => {
    return (
      <Grid
        // item xs={3}
        key={alumnus.id}
      >
        <Profile
          data={alumnus}
        />
      </Grid>
    )
  })

  return (
    <div
      className={classes.wrapper}
    >
      <div
        className={classes.currentTeam}
      >
        <Typography
          variant='h2'
        >
          <Box
            fontWeight='fontWeightBold'
          >
            Current Team
          </Box>
        </Typography>
      </div>
      <>
        <Grid
          container
          direction='row'
          justify='center'
        >
          {currentTeamMemberProfiles}
        </Grid>
      </>
      <div
        className={classes.alumni}
      >
        <Typography
          variant='h2'
        >
          <Box
            fontWeight='fontWeightBold'
          >
            Alumni
          </Box>
        </Typography>
      </div>
      <>
        <Grid
          container
          direction='row'
          justify='center'
        >
          {alumniProfiles}
        </Grid>
      </>
    </div>
  )
}

export default Team
