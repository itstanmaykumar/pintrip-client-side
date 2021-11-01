import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="container text-center">
            <h4 className="text-danger fw-light mt-5 mb-4">Warning!! This section is only reserved for admins...</h4>
            <Link className="btn btn-warning box mb-4" to="/">Go Back To Home</Link>
            <p>or</p>
            <p>Proceed further as an Admin..</p>
            <div className="row g-4 mb-5">
                <div className="col-lg-6 mt-5">
                    <div className=" p-4 shadow box rounded-20 h-100">
                        <Link className="btn" to="/managebooking">
                            <h2 className="text-warning my-auto">Manage All Bookings</h2>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="p-4 shadow box rounded-20 h-100">
                        <Link className="btn" to="/admin">
                            <h2 className="text-warning my-auto">Add A New Trip</h2>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="p-4 shadow rounded-20 h-100">
                        <Link className="btn disabled" to="/admin">
                            <h2 className="text-second my-auto">Manage All Trips</h2>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="p-4 shadow rounded-20 h-100">
                        <Link className="btn disabled" to="/admin">
                            <h2 className="text-second my-auto">Add A New Admin</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;