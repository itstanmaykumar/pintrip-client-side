import React from 'react';
import { Link } from 'react-router-dom';
import add from '../../img/add.png';
import addm from '../../img/addm.png';

const Admin = () => {
    return (
        <div className="container pb-5 text-center">
            <h4 className="mt-5 mb-4 text-danger fw-light">Warning!! This section is only reserved for admins...</h4>
            <Link className="mb-4 btn btn-warning box" to="/">Go Back To Home</Link>
            <p>or</p>
            <p>Proceed further as an Admin..</p>
            <div className="mb-5 row g-4">
                <div className="mt-5 col-lg-6">
                    <div className="pt-5 mx-4 shadow box rounded-20 h-100">
                        <Link className="btn d-flex h-100 flex-column justify-content-between" to="/managebooking">
                            <h2 className="pt-2 text-warning">Manage All Booking</h2>
                            <img className="img-fluid" src={add} alt="add new trip" />
                        </Link>
                    </div>
                </div>
                <div className="mt-5 col-lg-6">
                    <div className="pt-5 mx-4 shadow box rounded-20 h-100">
                        <Link className="btn d-flex h-100 flex-column justify-content-between" to="/addtrip">
                            <h2 className="pt-2 text-warning">Add A New Trip</h2>
                            <img className="img-fluid" src={addm} alt="add new trip" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;