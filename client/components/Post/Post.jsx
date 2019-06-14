/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import request from 'superagent';
import bodyParser from 'body-parser';

import './post.css';

class Post extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      post: {},
      err:''
    };
  }
      componentDidMount () {
        request.get(`api/v1/posts/${this.props.match.params.id}`)
          .then(res => {
            this.setState({
              post: res.body
            });
          })
          .catch(err => {
            this.setState({
              post:{},
              err: err
            });
          });
      }

    // TODO Pull content/info from database. 
    render() {
        return (
            <div className='container'>
                <div className='postheader'>
                <h1>{post.title}</h1>
                <Moment format="DD MMM YYYY" withTitle>{post.post_date}</Moment> 
                    <hr></hr>
                </div>
                <div className='postbody'>
                    <img src="http://res.cloudinary.com/all-in-a-row/image/upload/v1517462779/IMG_2747_qohud8.jpg" alt="Photo of me" />
                    <div>
                        <html>{post.content}</html>
                    </div>
                    <div className='tags'>
                        <span>Tags will go here</span>
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