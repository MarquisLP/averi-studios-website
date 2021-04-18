import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, CardActions, IconButton } from '@material-ui/core'
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Home as HomeIcon } from '@material-ui/icons'

const useStyles = makeStyles({
  card: {
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    width: 320
  },
  photo: {
    height: 320
  }
})

export default function Profile (props) {
  const classes = useStyles()

  function handleHomePageButtonClick () {
    window.open(props.data.homepage, '_blank')
  }

  function handleLinkedInButtonClick () {
    window.open(props.data.linkedIn, '_blank')
  }

  function handleGitHubButtonClick () {
    window.open(props.data.gitHub, '_blank')
  }

  return (
    <Card
      className={classes.card}
    >
      <CardActionArea>
        <CardMedia
          className={classes.photo}
          image={`/images/team_photos/${props.data.image}`}
          title={props.data.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h4'
            component='h2'
          >
            {props.data.name}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            align='justify'
          >
            {props.data.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          props.data.homepage === undefined
            ? null
            : (
              <IconButton
                onClick={handleHomePageButtonClick}
              >
                <HomeIcon />
              </IconButton>
            )
        }
        {
          props.data.linkedIn === undefined
            ? null
            : (
              <IconButton
                onClick={handleLinkedInButtonClick}
              >
                <LinkedInIcon />
              </IconButton>
            )
        }
        {
          props.data.gitHub === undefined
            ? null
            : (
              <IconButton
                onClick={handleGitHubButtonClick}
              >
                <GitHubIcon />
              </IconButton>
            )
        }
      </CardActions>
    </Card>
  )
}
