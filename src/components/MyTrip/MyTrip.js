import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyTrip = () => {
    const { user } = useAuth();
    const [carts, setCarts] = useState([]);

    useEffect(() =>{
        fetch(`https://infinite-harbor-27081.herokuapp.com/bookedTrip?email=${user.email}`)
        .then(res => res.json())
        .then(data => setCarts(data))
    },[]);

    const cancelBooking = id => {
        const proceed = window.confirm("Are you sure , you want to delete this booking?");
        if (proceed) {
            const url = `https://infinite-harbor-27081.herokuapp.com/bookedTrip/${id}`
                    axios.delete(url)
                    .then(res=>{
                        if (res.data.deletedCount) {
                            alert("Booking Cancelled Successfully!!");
                            const remainingBooking = carts.filter(cart=> cart._id !== id);
                            setCarts(remainingBooking);
                        }
                    })
        }
    }

    return (
        <div>
            <section className="container mt-2 mb-5 text-center">
                <h2 className="mt-5 fw-bolder">My Bookings</h2>
                <p className="pb-3 col-12 text-second">Check The Status Of The Bookings You've Made Or Cancel Them Anytime.</p>
                <div className="row g-4">
                    {
                        carts.map((cart) => (
                            <div key={cart._id} className="p-4 col-xl-4 col-lg-6 text-start">
                                <div className="p-4 shadow box rounded-20 h-100">
                                    <h6 className="text-second">Package Name:</h6>
                                    <h4>{cart.title}</h4>
                                    <img className="my-3 img-fluid rounded-3" src={cart.img} alt="cart img" />
                                    <p>Total Cost: ${cart.cost}k</p>
                                    <h5 className="text-warning">Booked By: </h5>
                                    <div className="p-2 mb-2">
                                        <h6>{cart.name}</h6>
                                        <small className="my-0 d-block fw-light text-second"><i className="pe-1 fas fa-envelope"></i> {cart.email}</small>
                                        <small className="my-0 d-block fw-light text-second"><i className="pe-2 fas fa-map-marker-alt"></i> {cart.address}</small>
                                        <small className="my-0 d-block fw-light text-second"><i className="pe-2 fas fa-calendar-check"></i> {cart.date}</small>
                                    </div>
                                    {
                                            cart.status ? 
                                            ( <p>Satus: <span className="py-0 ms-3 btn btn-success">Accepted</span></p> )
                                            :
                                            ( <p>Satus: <span className="py-0 ms-3 btn btn-danger">Pending</span></p> )
                                    }
                                    <div className="mt-4">
                                        <Link onClick={() => cancelBooking(cart._id)} className="btn btn-warning" to="/mytrip">Cancel Booking</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default MyTrip;