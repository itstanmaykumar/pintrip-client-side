import React from 'react';
import { Link } from 'react-router-dom';

const TripDetails = (props) => {
    const { _id, title, location, type, rating, img, cost, duration } = props.trip;
    return (
        <div className="col-lg-4 col-md-6 text-start p-4">
            <div className="shadow box rounded-20 h-100">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid rounded-t-20" src={img} alt="trip img" />
                    </div>
                    <div className="ms-4 py-4">
                        <div>
                            <small className="btn btn-warning py-0 text-white">{type}</small>
                        </div>
                        <div className="row justify-content-between mt-3 mb-2">
                            <span className="d-block col-6 fw-bolder">{title}</span>
                            <span className="d-block col-4 text-second">$ {cost}k</span>
                        </div>
                        <div className="row justify-content-between text-second py-1">
                            <small className="d-block col-6"><i className="pe-2 fas fa-map-marker-alt"></i> {location}</small>
                            <small className="d-block col-4 text-warning"><i className="fas fa-star-half-alt"></i> {rating}</small>
                        </div>
                        <div className="text-second">
                            <small><i className="pe-1 fas fa-location-arrow"></i> {duration} Days Trip</small>
                        </div>
                        <div>
                            <Link className="me-auto mt-4 py-1 btn btn-warning" to={`/trips/${_id}`}>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetails;