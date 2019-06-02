import React from 'react'

import './navagation.css'

const FixedNavagation = () => {
    return (
        <div className='navigation' >
        <ul>
            <li>
                <a href="/fashion">Fashion</a>
            </li>
            <li>
                <a href="/music">Music</a>
            </li>
            <li>
                <a href="/art">Art</a>
            </li>
            <li>
                <a href="/index">People</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
</div >
    )
}

export default FixedNavagation