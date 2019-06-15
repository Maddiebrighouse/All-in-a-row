// eslint-disable-next-line no-unused-vars
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <hr></hr>
            <h3>Images by ...// copy rights and shit</h3>
            <div className='socialbuttoms'>
                <a href="https://www.instagram.com/madeleinebrighouse/"><img src="/images/instagram-icon.png" alt="Instagram link"/></a>
                <a href="https://www.facebook.com/Madeleinebrighouse/"><img src="/images/facebook-icon.png" alt="Facebook link"/></a>
                <a href="https://www.pinterest.nz/madeleinebrighouse/"><img src="/images/pinterest-icon.png" alt="Pinterest link"/></a>
                <a href="https://open.spotify.com/user/maddiebrighouse"><img src="/images/spotify.png" alt="Spotify link"/></a>


            </div>
        </div>
    );
};

export default Footer;