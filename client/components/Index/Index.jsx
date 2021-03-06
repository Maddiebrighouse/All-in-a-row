import React from 'react';
import request from 'superagent';
// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Moment from 'react-moment';

// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Route} from 'react-router-dom';
import './index.css';

// remove if not have valide date
// max per page and next page
class Index extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          posts: [],
          err:''
        };
      }
      componentDidMount () {
        const { category } = this.props.match.params;
        request.get(`api/v1/posts/${category}`)
          .then(res => {
            this.setState({
              posts: res.body.posts
            });
          });
      }
      render () {
        return (
          this.state.posts.map(post => {
            return (
              <div>
                <Link to={`/post/${post.post_id}`} key={post.post_id}>
                  <div className='postcontainer'>
                  <img src="https://static1.squarespace.com/static/53608f78e4b0f06595c2c1ba/t/5a020a43419202cb70451e0e/1510083769972/Company+Of+Strangers+Nails-394.jpg?format=1500w" alt="post image"/>
                    <div>
                      <h1>{post.title}</h1>
                      <Moment format="DD MMM YYYY" withTitle>{post.post_date}</Moment>                  </div>
                    </div>
                </Link>
              </div>
            );
          }
          ));
      }
}

export default Index;