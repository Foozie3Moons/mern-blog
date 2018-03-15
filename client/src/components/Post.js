import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class Post extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div key={this.props.index}>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.title}</p>
        <button onClick={(e) => this.props.deletePost(e, this.props.index)}>Delete Post</button>
      </div>
    );
  }
}
export default Post;
