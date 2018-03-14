import React, {Component} from 'react';
const axios = require('axios');

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shakespeare: '',
    }

  }

  componentDidMount() {
    // the url for our api
    let poemApi = 'http://ShakeItSpeare.com/api/poem'
    // our fetch of that poemApi using ES6
    fetch(poemApi)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ shakespeare: json.poem })
      })
      .catch((error) => {
        console.log('An error occurred while parsing!', error)
      })
    // One way of using axios
    axios.get(poemApi)
      .then((response) => {
        console.log(response)
        this.setState({ shakespeare: response.data.poem })
      })
      .catch((error) => {
        console.log('An error occurred while parsing!', error)
      })
    // This does the same thing
    //   axios({
    //     method: 'GET',
    //     url: poemApi
    //   })
    //     .then((response) => {
    //       base.setState({ shakespeare: response.data.poem })
    //     })
    //     .catch((error) => {
    //       console.log('An error occurred while parsing!', error)
    //     })
  }

  render() {

    if (this.state.shakespeare) {
      var poetry = this.state.shakespeare
    } else {
      var poetry = 'Loading...'
    }
      return (
        <div className='App'>
          <h1>This is ma home page yall</h1>
          <h2>My favorite Shakespeare Poem:</h2>
          <p>{poetry}</p>
        </div>
    )
  }

}

export default Home;
