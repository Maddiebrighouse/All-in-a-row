/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import request from 'superagent';
import Moment from 'react-moment';

import './post.css';

class Post extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      post: {},
      err:'',
      content: {}
    };
  }
      componentDidMount () {
        request.get(`/api/v1/posts/id/${this.props.match.params.post_id}`)
          .then(res => {
            this.setState({
              post: res.body.post[0]
            });
          });
      }
// TODO META TAGS 
// TODO NEXT AND LAST POST
    render() {
      var post = this.state.post;
        return (
            <div className='container'>
                <div className='postheader'>
                <Moment format="DD MMM YYYY" withTitle>{post.post_date}</Moment> 
                    <h1>{post.title}</h1>
                </div>
                <div className='postbody'>
                    <div dangerouslySetInnerHTML={{__html: post.content}}>
                    </div>
                    <div className='tags'>
                    </div>
                    <a className='sharebutton' href="/">Share/Might be button</a>
                    <div className='postfooter'>
                        <hr></hr>
                        <a className='nextbutton' href="/">Newer Post</a>
                        <a className='previousbutton' href="/">Older Post</a>
                        <hr></hr>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;