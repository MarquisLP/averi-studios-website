import React from 'react'
import { Drawer, List, ListItem, ListItemText, makeStyles, ListItemIcon } from '@material-ui/core'
import { EmojiPeople as EmojiPeopleIcon, Info as InfoIcon, Apps as AppsIcon, People as PeopleIcon, Announcement as AnnouncementIcon, Email as EmailIcon } from '@material-ui/icons'

function NavigationDrawer (props) {
  const useStyles = makeStyles({
    drawer: {
      width: props.drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: props.drawerWidth,
      background: '#27a4f3',
      color: 'white',
      boxShadow: '0px 0px 12px black'
    }
  })
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      open={props.isOpen}
      variant={props.variant}
      onClose={props.variant === 'temporary' ? props.onClose : null}
      anchor='left'
    >
      <List>
        <ListItem
          button
          onClick={() => {
            props.setLastSelection('intro')
            props.scrollToRef(props.sectionRefs.intro)
          }}
          key='intro'
        >
          <ListItemIcon>
            <EmojiPeopleIcon
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText
            primary='Intro'
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            props.setLastSelection('company-overview')
            props.scrollToRef(props.sectionRefs.companyOverview)
          }}
          key='intro'
        >
          <ListItemIcon>
            <InfoIcon
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText
            primary='Company Overview'
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            props.setLastSelection('apps')
            props.scrollToRef(props.sectionRefs.apps)
          }}
          key='apps'
        >
          <ListItemIcon>
            <AppsIcon
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText
            primary='Apps'
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            props.setLastSelection('team')
            props.scrollToRef(props.sectionRefs.team)
          }}
          key='team'
        >
          <ListItemIcon>
            <PeopleIcon
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText
            primary='Team'
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            props.setLastSelection('announcements')
            props.scrollToRef(props.sectionRefs.announcements)
          }}
          key='announcements'
        >
          <ListItemIcon>
            <AnnouncementIcon
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText
            primary='Announcements'
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            props.setLastSelection('contact')
            props.scrollToRef(props.sectionRefs.contactUs)
          }}
          key='contact'
        >
          <ListItemIcon>
            <EmailIcon
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText
            primary='Contact'
          />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default NavigationDrawer
