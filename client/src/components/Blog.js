import React, { Component } from 'react';
import Post from './Post';
import AddPost from './AddPost';
import AllPosts from './AllPosts';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types'


class Blog extends Component {

  constructor() {
    super()
    this.state = {
      posts: [],
      redirect: false
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then((response) => {
        this.setState({
          posts: response.data
        });
      })
  }

  resetRedirect = () => this.setState({redirect: false});

  submitPost = (e, post) => {
    e.preventDefault();
    let { title, content } = post
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
      this.context.router.history.push('/blog/posts')
  }

  deletePost = (e, index) => {
    e.preventDefault()
    let posts = Array.from(this.state.posts);
    let deletedPost = posts.splice(index, 1)[0];
    console.log(deletedPost, deletedPost._id)
    axios.delete('/api/post', {data: {id: deletedPost._id}})
      .then((response) => {
        console.log(response);
        this.setState({
          posts: posts,
          redirect: true
        })
      })
  }

  render() {
    const addPostComponent = () => (
      <AddPost title={this.state.title}
        content={this.state.content}
        submitPost={this.submitPost}
        updateCurrentPost={this.updateCurrentPost}
        redirect={this.state.redirect}
      />
    )
    const allPostComponent = () => <AllPosts posts={this.state.posts} deletePost={this.deletePost} />
    return(
      <div>
        <h1>This is the blog!</h1>
        <h2>Cower before its might!</h2>
        <Router history={this.history}>
          <div>
            <nav>
              <Link to='/blog/posts'>See All Posts</Link>
              <Link to='/blog/posts/add'>Add Post</Link>
            </nav>
            <Route exact path='/blog/posts' component={allPostComponent} />
            <Route exact path='/blog/posts/add' component={addPostComponent}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default Blog;
