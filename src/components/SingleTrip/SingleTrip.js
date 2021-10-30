import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SingleTrip = () => {
    const { user } = useAuth();

    const {tripId} = useParams();
    const [singleTrip, setSingleTrip] = useState([]);

    const { id, title, type, img, description, accommodations, transportation, location, rating, cost, duration, person, group, gName, gImg, exp } = singleTrip;

    useEffect(() => {
        fetch(`https://infinite-harbor-27081.herokuapp.com/trips/${tripId}`)
        .then(res => res.json())
        .then(data => setSingleTrip(data))
    },[])

    return (
        <div className="container">
            <div className="py-5">
                <h5 className="text-warning">Package Trip No. {id+1}</h5>
                <h1>{title} <small className="fs-6 fw-light btn btn-outline-warning py-0 px-1">{type}</small></h1>
                <p className="text-second"><i className="pe-2 fas fa-map-marker-alt"></i> {location} <span className="ms-5"><i className="pe-2 fas fa-star-half-alt"></i> {rating}</span></p>
                <h3 className="mt-4">Itinerary</h3>
                <small className="d-block fw-light mb-5">{description}</small>
                <img className="w-75 rounded-20 box" src={img} alt="trip imge" />
                <h3 className="mt-4">Trip Details</h3>
                <div className="pt-3">
                    <p className="text-second mb-0"><i className="pe-2 fas fa-location-arrow"></i> {duration} Days Trip</p>
                    <p className="my-0"><span className="text-second">Person: </span><span className="ps-2 fw-bolder">{person}</span><span className="ms-5"><span className="text-second">Group SIze: </span><span className="ps-2 fw-bolder">Max {group}</span></span></p>
                    <h5 className="text-second mt-2">Cost: <span className="ps-3 fw-bolder text-warning">$ {cost}k</span></h5>
                </div>
                <h3 className="mt-5">Accomodations</h3>
                <small className="d-block fw-light mb-5">{accommodations}</small>
                <h3 className="mt-4">Transportation</h3>
                <small className="d-block fw-light mb-5">{transportation}</small>
                <h3 className="mt-4">Tour Guide</h3>
                <div className="col-lg-2 col-md-4 col-6">
                    <img className="rounded-circle shadow d-block mt-4 w-100" src={gImg} alt="guide imge" />
                    <span className="text-second text-center d-block mt-3 fw-bolder fs-4">{gName}</span>
                    <p className="text-warning text-center fs-6">{exp}+ Years of Experience</p>
                </div>
                <form className="bg-light rounded-20 p-5 mt-5">
                    <h3 className="mt-4 mb-0">Please Fill This Form</h3>
                    <small className="text-warning d-block mb-3">You Must Fill Up This Form To Book This Trip</small>
                    <div className="my-4">
                        <label htmlFor="name" className="form-label">Your Full Name</label>
                        <input type="text" className="form-control" id="name" value={user.displayName} disabled />
                    </div>
                    <div className="my-4">
                        <label htmlFor="email" className="form-label">Your Email Address</label>
                        <input type="email" className="form-control" id="email" value={user.email} disabled />
                    </div>
                    <div className="my-4">
                        <label htmlFor="phone" className="form-label">Your Phone Number</label>
                        <input type="number" className="form-control" id="phone" required />
                    </div>
                    <div className="my-4">
                        <label htmlFor="booktime" className="form-label">Your Suitable Date</label>
                        <input type="date" className="form-control" id="booktime" required />
                    </div>
                    <button type="submit" className="btn btn-warning mt-4">Book This Package</button>
                </form>
            </div>
        </div>
    );
};

export default SingleTrip;