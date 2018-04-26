import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'

import './index.css'

class Index extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          posts: []
        }
      }
      componentDidMount () {
        request.get('api/v1/posts')
          .then(res => {
            this.setState({
              posts: res.body.posts
            })
          })
      }
      render () {
        return (
          this.state.posts.map(post => {
            return (
              <Link to={`/post/${post.id}`} className="postCont" key={post.id}>
                <div className='post'>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </div>
              </Link>
            )
          }
          ))
      }
}

export default Index