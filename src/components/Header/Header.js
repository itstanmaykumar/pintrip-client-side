import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../img/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                        <img className="me-2" width="25" src={logo} alt="pintrip logo" />
                        <span className="fs-4 text-warning">pintrip</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-lg-0">
                        <li className="nav-item me-2">
                            <span className="nav-link text-dark">
                                {
                                    user?.email && (<span>Hi {user.displayName.slice(0, user.displayName.indexOf(" "))},</span>)
                                }
                            </span>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/trips">Book Trips</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/contact">Connect</Link>
                        </li>
                        <li className="nav-item me-2">
                            {
                                user?.email && (<Link className="nav-link" to="/mytrip">My Trip</Link>)
                            }
                        </li>
                        <li className="nav-item me-2">
                            {
                                user?.email && (<Link className="nav-link" to="/admin">Admin</Link>)
                            }
                        </li>
                        <li className="mb-2 me-4"></li>

                        {user?.email ? (
                            <li className="nav-item" onClick={logOut}>
                                <Link className="btn btn-outline-warning text-dark border-dark" to="/join">
                                    Sign Out <i className="fas fa-sign-in-alt"></i>
                                </Link>
                            </li>
                            ) : (
                            <li className="nav-item">
                                <Link className="btn btn-outline-warning text-dark border-dark" to="/join">
                                    Sign In <i className="fas fa-sign-in-alt"></i>
                                </Link>
                            </li>
                        )}
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;