import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      content: '',
      posts: []
    }
  }

  componentDidMount() {
    // make axios api call to server route
    // i.e. /api/posts
    axios.get('/api/posts')
      .then((response) => {
        this.setState({
          posts: response.data
        });
      })
      .then(() => {
        // console.log(this.state);
      })
      .catch( (response ) => {
        console.log(response.data)
      });
  }

  handleClick = (e) => {
    e.preventDefault();
    let { title, content } = this.state
    axios.post('/api/post/', {
      title: title,
      content: content
    })
      .then((response) => {
        let _id = response.data._id
        let posts = this.state.posts
        this.setState({
          title: '',
          content: '',
          posts: [...posts, { _id, title, content }]
        })
      })
  }

  handleChange = (e) => {
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

  handleDelete = (e, index) => {
    e.preventDefault()
    let posts = Array.from(this.state.posts);
    let deletedPost = posts.splice(index, 1)[0];
    console.log(deletedPost, deletedPost._id)
    axios.delete('/api/post', {data: {id: deletedPost._id}})
      .then((response) => {
        console.log(response);
        this.setState({
          posts: posts
        })
      })
  }

  render() {
    const posts = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <button onClick={(e) => this.handleDelete(e, index)}>Delete Post</button>
        </div>
      )
    })
    return (
      <div>
        <label htmlFor='text'>Title:</label>
        <br />
        <input id='text' type="text" value={this.state.title} onChange={this.handleChange} />
        <br />
        <label htmlFor='content'>Content:</label>
        <br />
        <input id='content' type="textarea" value={this.state.content} onChange={this.handleChange}  />
        <br />
        <button onClick={this.handleClick}>Add New Post</button>
        {posts}
      </div>
    );
  }
}
export default Post;
