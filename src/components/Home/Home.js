import React, { useEffect, useState } from 'react';
import TripItem from '../TripItem/TripItem';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() =>{
        fetch("https://infinite-harbor-27081.herokuapp.com/trips")
        .then(res => res.json())
        .then(data => setTrips(data))
    },[]);
    return (
        <div className="container">
            <Banner></Banner>
            <Services></Services>
            <section className="container py-3 my-5 text-center">
                <small className="text-second">Top Selling</small>
                <h2 className="mb-5 fw-bolder">Top <span className="border-4 border-bottom border-warning">Trip Packa</span>ges</h2>
                <div className="row g-4">
                    {
                        trips.length === 0?
                        (
                            <div className="d-flex justify-content-center text-warning">
                                <h1>Loading.....</h1>
                                <div className="mt-2 ms-2 spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )
                        :
                        (
                            trips.map((trip) => (
                                <TripItem key={trip.id} trip={trip}></TripItem>
                            ))
                        )
                    }
                </div>
            </section>
            <Newsletter></Newsletter>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;