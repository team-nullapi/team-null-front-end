import React from 'react';
import superagent from 'superagent';
import WebcamCapture from './webcamcapture';

class Webcam  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgData: '',
      webcamEnabled: false,
    }
  }

  handleImageRequest = async (obj) => {
    return await superagent.post(`${obj.url}/${obj.resource}`)
    .field('username', this.props.userName)
    .field('imageObj', obj.data.imgData)
    .field('image', 'user image');
  }

  handleWebcam = (img) => {
    this.setState({ 
      webcamEnabled: !this.state.webcamEnabled,
      imgData: img
    })

    this.props.handleImageRequest({
        url:process.env.REACT_APP_API_URL,
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
    const { webcamEnabled, imgData } = this.state;
    let content = webcamEnabled && !imgData ? (
      <WebcamCapture handler={this.handleWebcam} setImgData={this.props.setImgData}/>
    ) : imgData && !webcamEnabled ? 
      (
        <React.Fragment>
          <h3>Things</h3>
        </React.Fragment>
      )
    : (
        <React.Fragment>
          <button onClick={this.controlWebcam}>Click Me</button>
        </React.Fragment>
    )
    return (
      <React.Fragment>
          {content}
      </React.Fragment>
    )
  }
}

export default Webcam;