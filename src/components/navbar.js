import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};
/** ButtonAppBar Component 
 * All the styling for the header in each page
 * History is only render when user name is inputed
 * **/
export const ButtonAppBar = props => {
  const { classes} = props;

  return (
    <div className={classes.root}>
      <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Face Your Fortune
          </Typography>
          {console.log('props', props.getUrl)}
          {(props.getUrl === 'startPage') ? ' ' : <Button color="inherit">History</Button> }
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);