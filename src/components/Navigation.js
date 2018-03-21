import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Navigation = () => {
    return (
        <ul>
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.ABOUT}>About</Link></li>
            <li><Link to={routes.CONTACT}>Contact</Link></li>
        </ul>
    );
};

export default Navigation;