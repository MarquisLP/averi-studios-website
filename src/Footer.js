import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: 'black',
    marginTop: 50,
    padding: '20px 20px 15px 20px'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

function Footer () {
  const classes = useStyles()

  return (
    <div
      className={classes.wrapper}
    >
      <div
        className={classes.content}
      >
        <Typography
          variant='body1'
          color='textSecondary'
        >
          <Box
            fontWeight='fontWeightBold'
          >
            Contact: support@averistudios.com
          </Box>
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
        >
          <Box
            fontWeight='fontWeightBold'
          >
            &copy; {new Date().getFullYear()} Averi Studios Inc.
          </Box>
        </Typography>
      </div>
    </div>
  )
}

export default Footer
