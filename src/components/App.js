import React from 'react';
import StartPage from './startpage';
import Homepage from './homepage';
import superagent from 'superagent';
import ResultPage from './resultpage'
// import {Router, Route} from 'react-router';


/** App Component 
 * App has there based states, user name , image of user and 
 * url which render which page to call
 * **/
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      userName : ' ',
      imgData : '',
      url: 'startPage',
      userData : {},
    };
  }
  /* The setter to Set the state of APP object */
  setUserName = (userName) =>{
    this.setState({userName: userName});
  }
  setImgData = (imgData) =>{
    this.setState({imgData});
  }
  setURL = (url) => {
    this.setState({url})
  };
  setUserData (userData){
    this.setState({userData})
  }
  //sending data to server
  postUserData  = async () => {
    superagent.post('http://localhost:3000/pic')
    .field('imageObj', this.state.imgData)
    .field('userName', this.state.userName)
    .then(
      res => {
        {this.setUserData(res)}
      }
    )

    
  }
  // upon reaching the result page sends data to server and recives data back
  componentDidMount(){
    if(this.state.url==='resultPage'){
      this.postUserData();
    }
  }


  render() {
    
    return (
      <React.Fragment>
        {
          //Based on the state of url various compoenents are redner 
          //Three different page
          //Start Page:  Where user inputs user name
          // Home page:  Where user's picture is taken
          // Result page: Where fortune is rendered
          (this.state.url==='startPage') 
          ? <StartPage 
          setUserName={this.setUserName} setURL={this.setURL} 
          getUrl={this.state.url}
           /> 
          : ' '
        }
        {
          (this.state.url ==='homePage')
          ? <Homepage userName ={this.state.userName}setImgData={this.setImgData} setURL={this.setURL}/>
          : ' '
        }
        {
          (this.state.url === 'resultPage')
          ?<ResultPage />
          : ' '
        }
      </React.Fragment>
    );
  }
}

export default App;