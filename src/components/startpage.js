import React from 'react'
import UserInput from './userInput'

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
      <div
          style={{
              position: 'absolute', 
              left: '50%', 
              top: '40%',
              transform: 'translate(-50%, -50%)'
          }}
      >
          <UserInput/>
      </div>
      // <div class='startPage'>
      // <form onSubmit ={this.handleSubmit}>
      //   <h2>Hi, What's your name?</h2>
      //   <input onChange={this.handleChange}></input>
      //   <button> Submit</button>
      // </form>
      // </div>
    )
  }
}

export default StartPage;