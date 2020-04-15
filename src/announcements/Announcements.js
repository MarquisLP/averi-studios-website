import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Grid } from '@material-ui/core'
import announcements from '../assets/announcements'

const useStyles = makeStyles({
  wrapper: {
    paddingTop: 50,
    paddingBottom: 50
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 50
  },
  header: {
    alignSelf: 'center'
  },
  announcementsList: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginTop: 30
  },
  announcementItemHeader: {
    marginBottom: 10
  }
})

function AnnouncementItem (props) {
  const useStyles = makeStyles({
    description: {
      marginTop: 20
    }
  })

  const classes = useStyles()

  return (
    <>
      <div
        style={{
          marginBottom: 20
        }}
      >
        <Grid
          container
          direction='column'
          alignItems='flex-start'
          spacing={0}
        >
          <Grid
            item
          >
            <Typography
              variant='subtitle1'
            >
              {props.date}
            </Typography>
          </Grid>
          <Grid
            item
          >
            <Typography
              variant='h3'
            >
              {props.title}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        direction='column'
        alignItems='center'
        spacing={2}
      >
        {
          props.image === undefined
            ? null
            : (
              <Grid
                item
              >
                <img
                  src={`/images/announcements/${props.image}`}
                  alt={props.imageAlt === undefined ? '' : props.imageAlt}
                />
              </Grid>
            )
        }
        <Grid
          item
        >
          <Typography
            className={classes.description}
            variant='body1'
          >
            <div
              dangerouslySetInnerHTML={props.description}
            />
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

function Announcements () {
  const classes = useStyles()

  const announcementItems = announcements.map((announcement) => {
    return (
      <AnnouncementItem
        key={announcement.id}
        title={announcement.title}
        date={announcement.date}
        description={announcement.description}
        image={announcement.image}
        imageAlt={announcement.imageAlt}
      />
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
          className={classes.header}
          variant='h2'
        >
          <Box
            fontWeight='fontWeightBold'
          >
            Announcements
          </Box>
        </Typography>
        <div
          className={classes.announcementsList}
        >
          {announcementItems}
        </div>
      </div>
    </div>
  )
}

export default Announcements
