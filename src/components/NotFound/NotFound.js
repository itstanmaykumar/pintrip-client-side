import React from 'react';
import { Link } from 'react-router-dom';
import nfImg from '../../img/404.png';

const NotFound = () => {
    return (
        <div className="container px-5">
            <div className="px-3 row align-items-center text-end">
                <div className="py-3 col-md-6">
                    <img className="img-fluid" src={nfImg} alt="not found" />
                </div>
                <div className="py-3 col-md-6 text-warning">
                    <h1>Hmmm...</h1>
                    <h4>Looks like something went wrong.</h4>
                    <small className="mb-4 text-second d-block">Would you like to go back?</small>
                    <Link className="btn btn-warning" to="/">Go Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;