import React, { Component} from 'react';
const axios = require('axios');

class About extends Component {

  constructor(props) {
    super(props)

    this.state = {
      zip: '98115',
      temp: ''
    }
  }

  handleChange = (e) => {
    this.setState({zip: e.target.value}, console.log(this.state))
  }

  handleClick = (e) => {
    console.log('clicking')
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98`)
      .then((response) => {
        let zip = this.state.zip
        console.log(response)
        this.setState({
          zip,
          temp: response.data.main.temp
        })
      })
  }

  render() {
    return(
      <div>
        <h1>This is not about me, this is about us all!</h1>
        Enter yo zip&nbsp;
        <input value={this.state.zip} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Search</button>
        <p>temp: {this.state.temp}</p>
      </div>
    )
  }
}

export default About;
