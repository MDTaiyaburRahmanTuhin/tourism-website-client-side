import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>

            <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" srcset="" />
            <Link to="/"><button className="btn-more">Go Back</button></Link>
        </div>
    );
};

export default NotFound;