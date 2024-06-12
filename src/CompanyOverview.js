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
    marginBottom: '20vh',
  },
  description: {
    marginTop: '15px',
    maxWidth: '800px',
  }
})

function CompanyOverview () {
  const classes = useStyles()

  return (
    <div
      className={classes.content}
    >
      <Typography
        variant='h2'
      >
        <Box
          textAlign='left'
          fontWeight='fontWeightBold'
        >
	     	Company Overview
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
            <b>Averi Studios Inc.</b> is a software startup company specializing in productivity applications for businesses and individuals. It develops applications for a variety of platforms including desktop, web, and mobile.
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
			Playing the roles of both directors and developers, the members of our small team focus on providing high-quality software products to our clients to significantly speed up their day-to-day processes. Our software makes extensive use of user-focused design while also focusing on ease of use, security, and privacy.
        </Box>
      </Typography>
    </div>
  )
}

export default CompanyOverview
