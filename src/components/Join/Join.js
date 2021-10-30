import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import google from '../../img/google.png';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Join = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogle = () => {
        googleSignIn()
        .then ((result) => {
            history.push(redirect_url);
        });
    };


    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center my-5 py-5 border-end border-2">
                    <div className="">
                        <h1 className="text-second mb-5">Welcome To</h1>
                        <Link className="navbar-brand mt-5" to="/home">
                            <img className="me-2" width="50" src={logo} alt="pintrip logo" />
                            <span className="fs-1 text-warning">pintrip</span>
                        </Link>
                        <p className="text-second px-5 mt-3">a leading tour Operator at Bangladesh. We are provide Bangladesh and world wide Tour Package, Hotel booking and air ticket services.</p>
                    </div>
                </div>
                <div className="col-lg-6 mb-5 py-5">
                    <h5 className="text-second text-center mb-5">Please Log In to Continue</h5>
                    <button onClick={handleGoogle} className="mx-auto btn btn-outline-main text-start d-block border border-2 pt-4 px-5 rounded-20 box">
                        <div className="d-flex">
                            <img className="mt-1 me-3" width="30" height="30" src={google} alt="google icon" />
                            <p className="fs-4">Sign In With Google</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Join;