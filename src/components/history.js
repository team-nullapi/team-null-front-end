import React from 'react';
import superagent from 'superagent';


class History extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fortunes: []
    }
  }

  componentDidMount() {
    if(this.props.getURL === 'historyPage') {
      superagent.get(`${process.env.REACT_APP_API_URL}/fortunes`).query({data: this.props.user})
      .then(results => this.setState({ fortunes: results }))
    }
  }

  render(){
    return(
      <>
        <h2>History</h2>
      </>
    )
  }
}

export default History;