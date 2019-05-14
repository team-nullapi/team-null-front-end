import React from 'react'

class StartPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userName : ''
    };
  }
  handleChange = e => {
    let userName = e.target.value;
    this.setState({userName});
  }
  handleSubmit = e =>{
    e.preventDefault();
    this.props.setUserName(this.state.userName);
    this.props.setURL('homePage');
  }
  render(){
    return (
      <div class='startPage'>
      <form onSubmit ={this.handleSubmit}>
        <h2>Hi, What's your name?</h2>
        <input onChange={this.handleChange}></input>
        <button> Submit</button>
      </form>
      </div>
    )
  }
}

export default StartPage