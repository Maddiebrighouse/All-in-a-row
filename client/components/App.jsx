import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import FixedNavagation from './Navagation/Navagation.jsx'
import Footer from './Footer/Footer.jsx'
import Post from './Post/Post.jsx'
import Index from './Index/Index.jsx'
import About from './About/About.jsx'
import Login from './Login/Login.jsx'

class App extends React.Component {
    render() {

        return (
            <Router>
                <div>
                    <div className='header'>
                        <a href="/">
                            <img className="header" src="/images/All-in-a-row-header-2.jpg" alt="Header Banner" />
                        </a>
                    </div>
                    <FixedNavagation />
                    <Route path='/:category' component={Index} />
                    <Route exact path='/post/:id' component={Post} />
                    <Route path='/about' component={About} />
                    <Route exact path='/login' component={Login} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App