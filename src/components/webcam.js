import React from 'react';
import WebcamCapture from './webcamcapture';

/** WebCam Component 
 * Get user's picture from user and set 'imgData' state for App
 * By calling webCamCapture Component
 * **/
class Webcam  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgData: '',
      webcamEnabled: false,
    }
  }

  handleWebcam = (img) => {
    this.setState({ 
      webcamEnabled: !this.state.webcamEnabled,
      imgData: img
    })
  }

  controlWebcam = () => {
    this.setState({ webcamEnabled: !this.state.webcamEnabled });
  }

  render(){
    const { webcamEnabled, imgData } = this.state;
    let cam = webcamEnabled && !imgData ? (
      <WebcamCapture handler={this.handleWebcam} setImgData={this.props.setImgData} setURL={this.props.setURL}/>
    ) : imgData && !webcamEnabled ? 
      (
        <p> </p>
      )
    : (
        <React.Fragment>
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

export default Webcam;