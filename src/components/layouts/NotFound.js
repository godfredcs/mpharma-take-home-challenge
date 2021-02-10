import React from 'react';
import Navbar from './Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar />

            <div className="container">
                <h3 className="mt-5">Not Found</h3>
                The page you're looking for does not exist.
            </div>
        </div>
    )
};

export default NotFound;
