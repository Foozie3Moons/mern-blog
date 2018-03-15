import React, { Component } from 'react';
import { Redirect } from 'react-router';

class AddPost extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: ''
    }
  }

  updateCurrentPost = (e) => {
    if (e.target.id === 'text') {
      let content = this.state.content
      this.setState({
        title: e.target.value,
        content: content
      })
    } else {
      let title = this.state.title
      this.setState({
        title: title,
        content: e.target.value
      })
    }
  }

  render() {
    const redirect = this.props.redirect ? <Redirect to='/blog/posts' /> : ''
    return(
      <div>
        {redirect}
        <label htmlFor='text'>Title:</label>
        <br />
        <input id='text' type="text" value={this.state.title} onChange={this.updateCurrentPost} />
        <br />
        <label htmlFor='content'>Content:</label>
        <br />
        <input id='content' type="textarea" value={this.state.content} onChange={this.updateCurrentPost}  />
        <br />
        <button onClick={(e) => this.props.submitPost(e, this.state)}>Add New Post</button>
      </div>
    )
  }
}

export default AddPost
