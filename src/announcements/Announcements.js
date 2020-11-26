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
    marginTop: 30
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
    <Grid
      container
      direction='column'
      alignItems='center'
      spacing={3}
    >
      <Grid
        item
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
      </Grid>
      <Grid
        item
      >
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
                    style={{
                      maxWidth: '100vw'
                    }}
                  />
                </Grid>
              )
          }
          <Grid
            item
            className={classes.announcementItemDescription}
            style={{
              maxWidth: 1000
            }}
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
      </Grid>
    </Grid>
  )
}

function Announcements () {
  const classes = useStyles()

  const announcementItems = announcements.map((announcement) => {
    return (
      <Grid
        item
        key={announcement.id}
      >
        <AnnouncementItem
          title={announcement.title}
          date={announcement.date}
          description={announcement.description}
          image={announcement.image}
          imageAlt={announcement.imageAlt}
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
          className={classes.header}
          variant='h2'
        >
          <Box
            fontWeight='fontWeightBold'
          >
            Announcements
          </Box>
        </Typography>
        <Grid
          container
          direction='column'
          alignItems='center'
          spacing={10}
          className={classes.announcementsList}
        >
          {announcementItems}
        </Grid>
      </div>
    </div>
  )
}

export default Announcements
