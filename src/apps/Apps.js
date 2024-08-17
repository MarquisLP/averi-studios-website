import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'
import WorldScribe2 from './WorldScribe2'
import Alfred from './Alfred'

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
        <Alfred />
        <WorldScribe2 />
      </div>
    </div>
  )
}

export default Apps
