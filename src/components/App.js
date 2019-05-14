import React from 'react';
import superagent from 'superagent';
import WebcamCapture from './webcamCapture';
import Navbar from './navbar';

/** Main Component **/
class Main  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgData: '',
      webcamEnabled: false,
      userName: ''
    }
  }
  handleImageRequest = async (obj) => {
    return await superagent.post('http://localhost:3000/pic')
    .field('imageObj', obj.data.imgData)
    .field('image', 'user image');
  }

  handleWebcam = (img) => {
    this.setState({ 
      webcamEnabled: !this.state.webcamEnabled,
      imgData: img
    })

    this.handleImageRequest({
        url:'http://localhost:3000',
        resource:'pic',
        data: {
          username: this.state.userName,
          imgData: img
        }
      })
    .then(result => console.log(result))
  }

  controlWebcam = () => {
    this.setState({ webcamEnabled: !this.state.webcamEnabled })
  }

  render(){
    const { webcamEnabled, userName, imgData } = this.state;
    let cam = webcamEnabled && !imgData ? (
      <WebcamCapture handler={this.handleWebcam} />
    ) : imgData && !webcamEnabled ? 
      (
        <React.Fragment>
          <h3>Things</h3>
        </React.Fragment>
      )
    : (
        <React.Fragment>
          <h2> Hi {userName}! Ready for your fortune?</h2>
          <button onClick={this.controlWebcam}>Click Me</button>
        </React.Fragment>
    )
    return (
      <React.Fragment>
        <main>
          {cam}
        </main>
      </React.Fragment>
    )
  }
}

/** App Component **/
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;