import React from 'react';
import superagent from 'superagent';
import NavBar from './navbar'


class History extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fortunes: []
    }
  }

  componentDidMount() {
    if(this.props.getUrl === 'historyPage') {
      superagent.get(`${process.env.REACT_APP_API_URL}/fortunes`).query({data: { username: this.props.user}})
      .then(results => this.setState({ fortunes: results }))
      .catch(err => console.error(err));
    }
  }

  render(){
    console.log('props', this.props);
    return(
      <>
        <NavBar setURL={this.props.setURL} getUrl={this.props.getUrl} user={this.props.user}/>
        <h2>History</h2>
      </>
    )
  }
}

export default History;