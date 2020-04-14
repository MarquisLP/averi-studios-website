import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, CardMedia, Card } from '@material-ui/core'
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
  photo: {
    height: 600
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
    <div>
      <Typography
        variant='subtitle1'
      >
        {props.date}
      </Typography>
      <Typography
        variant='h3'
      >
        {props.title}
      </Typography>
      {
        /*
        props.image === undefined
          ? null
          : (
              <Card>
              <CardMedia
                className={classes.photo}
                // image={`/images/announcements/${props.image}`}
                image={`/images/announcements/iden-t-fy_launch.jpg`}
                title={props.data.name}
              />
              </Card>
            <div
              className={classes.photo}
            >
              <img
                src={`/images/announcements/iden-t-fy_launch.jpg`}
                // src={`/images/announcements/${props.image}`}
                // className={classes.photo}
              />
            </div>
          )
        */
      }
      <Typography
        className={classes.description}
        variant='body1'
      >
        <div
          dangerouslySetInnerHTML={props.description}
        />
      </Typography>
    </div>
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
