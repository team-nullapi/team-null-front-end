import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import NavBar from './navbar';

const styles = theme => ({
  listItemPrimary: {
    color: 'gold',
    fontSize:'3em',
  },
  listItemSecondary: {
  },
  root: {
    width: '100%',
    maxWidth: 960,
    backgroundColor: 'none',
    alignItems: 'center',
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const {classes,setURL,getUrl,user } = props;
  return (
    <>
      <NavBar setURL={props.setURL} getUrl={props.getUrl} user={props.user} />
      <div className='about'>
        <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="DOUG" style={{ height:300, width: 300 }} src= {require('../images/aboutme-devon.jpg')} />
        </ListItemAvatar>
        <ListItemText
          classes={{ primary: classes.listItemPrimary }}
          primary="Devon"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline}  style={{ color: 'white', fontSize:22}}>
              "Hello, I am an Air Force Veteran turned coder. I have spent the past year working as a developer and I'm currently a Software Development Engineering Apprentice at Amazon."
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="DOUG" style={{ height:300, width: 300 }} src= {require('../images/aboutme-doug.jpg')} />
        </ListItemAvatar>
        <ListItemText
        classes={{ primary: classes.listItemPrimary }}
          primary="Doug"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline}  style={{ color: 'white',fontSize:22}}>
                "I'm a thoughtful and hardworking software developer who loves to think outside the box and bring fresh perspective to everything I touch"
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="DOUG" style={{ height:300, width: 300 }} src= {require('../images/aboutme-saurav.jpg')} />
        </ListItemAvatar>
        <ListItemText
        classes={{ primary: classes.listItemPrimary }}
          primary="Saurav"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline}  style={ { color: 'white',fontSize:22}}>
              "Hello. My name is Saurav. I am a US Army Veteran. I graduate from South Dakota State University and worked there for 3 years as full stack developer on .Net framework."
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="DOUG" style={{ height:300, width: 300 }} src= {require('../images/aboutme-tim.jpg')} />
        </ListItemAvatar>
        <ListItemText
        classes={{ primary: classes.listItemPrimary }}
          primary="Tim"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline}  style={{ color: 'white',fontSize:22}}>
                "Tim is from Seattle with a background in the Military, Music, and Finance. He started coding from a passion for combining music, art, and technology and enjoys the complicated technical challenges and creativity found in building applications. He looks forward to the opportunities to learn more and build more features for AWS customers and the opportunity to come up with innovative products."
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </div>
    </> 
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);