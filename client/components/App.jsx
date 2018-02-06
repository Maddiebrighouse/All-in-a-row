import React from 'react'

import FixedNavagation from './Navagation'
import Footer from './Footer'
class App extends React.Component {
    render() {

        return (
            <div>
                <FixedNavagation />
                <Footer />
            </div>
        )
    }
}

export default App