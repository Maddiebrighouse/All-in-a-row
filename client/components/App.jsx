import React from 'react'

import FixedNavagation from './Navagation'
import Footer from './Footer'
import Post from './Post'

class App extends React.Component {
    render() {

        return (
                <div>
                    <div className='header'>
                        <img className="header" src="/images/All-in-a-row-header.jpg" alt="Header Banner"/>
                </div>
                <FixedNavagation />
                <Post />
                <Footer />
            </div>
        )
    }
}

export default App