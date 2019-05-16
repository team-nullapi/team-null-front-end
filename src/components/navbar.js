import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';


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
class ButtonAppBar extends React.Component {
  constructor(props){
    super(props);
  }
  handlePollClick = () => {
    this.props.setURL('historyPage');
  }
  handleHomeClick = () => {
    this.props.setURL('startPage')
  }
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <IconButton onClick={this.handleHomeClick} className={classes.menuButton} color="inherit" aria-label="Menu">
              <SvgIcon>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                Face Your Fortune
            </Typography>
            {(this.props.getUrl === 'startPage') || (this.props.getUrl === 'historyPage') ? ' ' : <Button onClick={this.handlePollClick} color="inherit"> <i class="material-icons">poll</i></Button> }
            <Button color="inherit">
              <i class="material-icons">group</i>
            </Button> 
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);