import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import playstore from '../../img/android.png';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="py-4 row justify-content-between text-start">
                    <div className="mt-4 col-lg-2 col-sm-6 order-lg-2 order-xs-2">
                        <h6 className="mb-2 text-white"><span className="border-2 border-bottom border-warning">Quick L</span>inks</h6>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/info">About Us</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/feedback">Feedback</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/services">Flight</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/services">Hotels</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/services">Testimonial</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/career">Career</Link>
                    </div>
                    <div className="mt-4 mb-3 text-white col-lg-3 col-sm-6 order-lg-3 order-xs-1">
                        <h6 className="mb-2 text-white"><span className="border-2 border-bottom border-main">Connect Wi</span>th Us</h6>
                        <div className="my-2 d-flex text-second">
                            <small className="col-1"><i className="text-white fas fa-map-marker-alt"></i></small>
                            <small>12, Jhankar Mahbub Street,<br/>Programming Hero, Bangladesh</small>
                        </div>
                        <div className="my-2 d-flex text-second">
                            <small className="col-1"><i className="text-white fas fa-phone-alt"></i></small>
                            <small>999, +88012345</small>
                        </div>
                        <h6 className="mt-3 mb-3 text-white"><span className="border-2 border-bottom border-main">Download O</span>ur App</h6>
                        <div className="row justify-content-between pe-5">
                            <Link className="pb-3 d-block pe-xl-5 pe-lg-0 pe-md-5 pe-5" to="/playstore">
                                <img className="w-100 pe-5 pe-sm-0" src={playstore} alt="android" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 col-lg-4 col-sm-12 order-lg-1 order-xs-3">
                        <div className="pb-2">
                            <Link className="navbar-brand" to="/home">
                                <img className="me-2" width="20" src={logo} alt="mindcare logo" />
                                <span className="fs-4 text-warning">pintrip</span>
                            </Link>
                        </div>
                        <small className="text-second d-block"><span className="text-white">pintrip</span> a leading tour Operator at Bangladesh. We are provide Bangladesh and world wide Tour Package, Hotel booking and air ticket services.</small>
                        <div className="mt-2 mb-4">
                            <Link to="/social"><i className="text-white pe-3 fab fa-facebook-f"></i></Link>
                            <Link to="/social"><i className="text-white pe-3 fab fa-twitter"></i></Link>
                            <Link to="/social"><i className="text-white pe-3 fab fa-google-plus-g"></i></Link>
                            <Link to="/social"><i className="text-white pe-3 fab fa-linkedin-in"></i></Link>
                        </div>
                        <small className="text-second">Copyright &copy; 2021. <span className="text-light">Tanmay Kumar.</span></small>
                        <div>
                            <Link to="/desclaimer" className="text-decoration-none text-warning foo-hover"><small>Desclaimer.</small></Link>
                            <Link to="/tnc" className="px-2 text-decoration-none text-warning foo-hover"><small>Terms & Conditions.</small></Link>
                            <Link to="/privacy" className="text-decoration-none text-warning foo-hover"><small>Privacy Policy.</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;