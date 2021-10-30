import React, { useEffect, useState } from 'react';
import TripDetails from '../TripDetails/TripDetails';

const About = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() =>{
        fetch("https://infinite-harbor-27081.herokuapp.com/trips")
        .then(res => res.json())
        .then(data => setTrips(data))
    },[]);


    return (
        <div>
            <section className="container mt-2 mb-5 text-center">
                <h3 className="mt-5 fw-bolder">Package Trips</h3>
                <p className="pb-3 col-12 text-second">Explore The Various Trips We Offer And Find Your Suitable Trip!</p>
                <div className="row g-4">
                    {
                        trips.map((trip) => (
                            <TripDetails key={trip.id} trip={trip}></TripDetails>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default About;