import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'
import WorldScribe from './WorldScribe'
import WorldScribe2 from './WorldScribe2'

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    paddingTop: 50,
    paddingBottom: 50
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

function Apps () {
  const classes = useStyles()

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
            Apps
          </Box>
        </Typography>
        <WorldScribe2 />
        <WorldScribe />
      </div>
    </div>
  )
}

export default Apps
