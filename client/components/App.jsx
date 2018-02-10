import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import FixedNavagation from './Navagation'
import Footer from './Footer'
import Post from './Post'
import Index from './Index'
import About from './About'

class App extends React.Component {
    render() {

        return (
            <Router>
                <div>
                    <div className='header'>
                        <a href="/">
                            <img className="header" src="/images/All-in-a-row-header-2.jpg" alt="Header Banner"/>
                        </a>
                    </div>
                    <FixedNavagation />
                    <Route path='/index' component={Index}/>
                    <Route exact path='/' component={Post} />
                    <Route path='/about' component={About}/>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App