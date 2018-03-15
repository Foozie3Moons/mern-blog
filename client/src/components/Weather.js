import React, { Component} from 'react';
const axios = require('axios');

class Weather extends Component {

  constructor(props) {
    super(props)

    this.state = {
      zip: '98115',
      currentZip: '',
      temp: ''
    }
  }

  componentDidMount() {
    this.getWeatherData((response) => {
      let zip = this.state.zip
      this.setState({
        zip: zip,
        currentZip: '',
        temp: response.data.main.temp
      })
    })
  }

  getWeatherData = (callback) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.currentZip || this.state.zip},us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98`)
      .then((response) => {
        callback(response)
      })
  }

  handleChange = (e) => {
    this.setState({currentZip: e.target.value})
  }

  handleClick = (e) => {
    console.log(this.state)
    this.getWeatherData((response) => {
      let currentZip = this.state.currentZip
      this.setState({
        zip: currentZip,
        currentZip: '',
        temp: response.data.main.temp
      })
    })
  }

  render() {
    return(
      <div>
        <h1>Weather for {this.state.zip}!</h1>
        Enter yo zip&nbsp;
        <input value={this.state.currentZip} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Search</button>
        <p>temp: {this.state.temp}</p>
      </div>
    )
  }
}

export default Weather;
