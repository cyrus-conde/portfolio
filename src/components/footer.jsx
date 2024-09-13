import React from 'react';
import ReactDOM from 'react-dom/client';

const Footer = () => {
    return (
        
            <div className="text-gray-700 text-center p-4">
                © {new Date().getFullYear()} Copyright
                <a className="text-gray-800" href="#"> Mc Drach Cyrus Conde | All Rights Reserved</a>
            </div>
        
    )
}

export default Footer;

