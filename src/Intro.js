import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '35vh',
    marginBottom: '50vh'
  }
})

function Intro () {
  const classes = useStyles()

  return (
    <div
      className={classes.content}
    >
      <Typography
        variant='h1'
        color='primary'
      >
        <Box
          textAlign='center'
          fontWeight='fontWeightBold'
          fontSize='1.5em'
        >
          Averi Studios
        </Box>
      </Typography>
      <Typography
        variant='h3'
        color='primary'
      >
        <Box
          textAlign='center'
        >
          Apps as clear as blue skies
        </Box>
      </Typography>
    </div>
  )
}

export default Intro
