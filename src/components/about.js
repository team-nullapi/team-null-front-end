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
    fontSize:'2em',
  },
  listItemSecondary: {
  },
  root: {
    width: '100%',
    maxWidth: 960,
    backgroundColor: 'none',
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
          <Avatar alt="DEVON" src="" />
        </ListItemAvatar>
        <ListItemText
          classes={{ primary: classes.listItemPrimary }}
          primary="Devon"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline}  style={{ color: 'white'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="DOUG" src="" />
        </ListItemAvatar>
        <ListItemText
        classes={{ primary: classes.listItemPrimary }}
          primary="Doug"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline}  style={{ color: 'white'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SAURAV" src="" />
        </ListItemAvatar>
        <ListItemText
        classes={{ primary: classes.listItemPrimary }}
          primary="Saurav"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline}  style={ { color: 'white'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="TIM" src="" />
        </ListItemAvatar>
        <ListItemText
        classes={{ primary: classes.listItemPrimary }}
          primary="Tim"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline}  style={{ color: 'white'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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