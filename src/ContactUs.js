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
    marginTop: '10vh',
    marginBottom: '20vh',
  },
  description: {
    marginTop: '15px',
    maxWidth: '800px',
  }
})

function ContactUs () {
  const classes = useStyles()

  return (
    <div
      className={classes.content}
    >
      <Typography
        variant='h2'
        color='black'
      >
        <Box
          fontWeight='fontWeightBold'
          textAlign='left'
        >
	     	Contact Us
        </Box>
      </Typography>
      <Typography
        variant='body1'
        color='black'
      >
        <Box
	      className={classes.description}
          textAlign='left'
        >
          Have an inquiry about our company or one of our products? Send a message to the email address below and we'll be happy to be in touch with you.
        </Box>
      </Typography>
      <Typography
	    className={classes.description}
        variant='body1'
        color='black'
      >
        <Box
          textAlign='left'
        >
          <b>support@averistudios.com</b>
        </Box>
      </Typography>
    </div>
  )
}

export default ContactUs
