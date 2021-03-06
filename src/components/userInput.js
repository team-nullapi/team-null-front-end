import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 600,
  },
  input: {
    color: "white"
  },
  floatingLabelFocusStyle: {
    color: "white"
  },
  label: {
    color: "lightgrey",
    '&$focused': {
      color: 'white'
    }
  },
  focused: {},
  outlinedInput: {
    color: 'white',
    '&$focused $notchedOutline': {
      border: '1px solid white'
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important"
  }
});
/** OutlineTextFields Component 
 * Get user name from user and set 'userName' state for App
 * **/
class OutlinedTextFields extends React.Component {
  state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(e.target.value);
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          // floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          InputProps={{className: classes.input}}
          id="outlined-name"
          label="输入你的名字 (Enter Your Name)"
          className={classes.textField}
          className={classes.menu}
          classname="test-label"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              this.handleSubmit(ev);
            }
          }}
          // color='color'
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.focused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.outlinedInput,
              focused: classes.focused,
              notchedOutline: classes.notchedOutline,
            },
          }}      
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);