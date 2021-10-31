import React from 'react';
import { Link } from 'react-router-dom';

const TripItem = (props) => {
    const { _id, title, location, rating, img, cost, duration } = props.trip;
    return (
        <div className="p-4 col-lg-4 col-md-6 text-start">
            <div className="shadow box rounded-20 h-100">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid rounded-t-20" src={img} alt="trip img" />
                    </div>
                    <div className="py-4 ms-4">
                        <div>
                            <small className="text-second"><i className="pe-2 fas fa-map-marker-alt"></i> {location}</small>
                        </div>
                        <div className="my-2 row justify-content-between">
                            <span className="d-block col-6 fw-bolder">{title}</span>
                            <span className="d-block col-4">$ {cost}k</span>
                        </div>
                        <div className="py-1 row justify-content-between text-second">
                            <small className="d-block col-6"><i className="pe-1 fas fa-location-arrow"></i> {duration} Days Trip</small>
                            <small className="d-block col-4 text-warning"><i className="fas fa-star-half-alt"></i> {rating}</small>
                        </div>
                        <div>
                            <Link className="py-1 mt-4 me-auto btn btn-warning" to={`/trips/${_id}`}>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripItem;