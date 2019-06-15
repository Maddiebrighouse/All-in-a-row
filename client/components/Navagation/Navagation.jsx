// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom';
 
import './navagation.css';

const FixedNavagation = () => {
    return (
        <div className='navigation' >
        <ul>
            <li>
                <Link to="/fashion">Fashion</Link>
            </li>
            <li>
                 <Link to="/music">Music</Link>
            </li>
            <li>
                <Link to="/art">Art</Link>
            </li>
            <li>
                <Link to="/people">People</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
</div >
    );
};

export default FixedNavagation;