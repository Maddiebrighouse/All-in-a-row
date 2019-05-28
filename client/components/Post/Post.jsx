import React from 'react'

import './post.css'

class Post extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    //   componentDidMount () {
    //     request
    //       .get(`api/v1/posts/${this.props.match.params.id}`)
    //       .then(res => {
    //         this.setState({
    //           post: res.body
    //         })
    //       })
    //   }

    // TODO Pull conent/info from database. 
    render() {
        return (
            <div className='container'>
                <div className='postheader'>
                    <h1>Header</h1>
                    <time dateTime="2018-02-4">February 9, 2018</time>
                    <hr></hr>
                </div>
                <div className='postbody'>
                    <img src="http://res.cloudinary.com/all-in-a-row/image/upload/v1517462779/IMG_2747_qohud8.jpg" alt="Photo of me" />
                    <div>
                        <p>
                            some more text linked to the picture.
                        <a href="/">styling this link</a>
                        </p>
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
        )
    }
}

export default Post