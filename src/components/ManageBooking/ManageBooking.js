import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooking = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() =>{
        fetch("https://infinite-harbor-27081.herokuapp.com/bookedTrip")
        .then(res => res.json())
        .then(data => setCarts(data))
    },[]);

    const updateStatus = (id) => {
        const url = `https://infinite-harbor-27081.herokuapp.com/bookedTrip/${id}`
        axios.put(url)
        .then(res => {
            if(res.data.modifiedCount) {
                alert('Booking Accepted Sucessfully!!!');
                // fetching API data again to refresh
                fetch("https://infinite-harbor-27081.herokuapp.com/bookedTrip")
                .then(res => res.json())
                .then(data => setCarts(data));
            }
        })
    }

    const cancelBooking = (id) => {
        const proceed = window.confirm("Are you sure , you want to delete this booking?");
        if (proceed) {
            const url = `https://infinite-harbor-27081.herokuapp.com/bookedTrip/${id}`
            axios.delete(url)
            .then(res => {
                if (res.data.deletedCount) {
                    alert("Booking Deleted Successfully!!");
                    const remainingBooking = carts.filter(cart=> cart._id !== id);
                    setCarts(remainingBooking);
                }
            })
        }
    }

    return (
        <div>
            <section className="container mt-2 mb-5 text-center">
                <h2 className="mt-5 fw-bolder">All Bookings</h2>
                <p className="pb-3 col-12 text-second">Manage All The Bookings By All The Users.</p>
                <div className="row g-4">
                    {
                        carts.map((cart) => (
                            <div key={cart._id} className="p-4 col-lg-4 col-md-6 text-start">
                                <div className="p-4 shadow box rounded-20 h-100">
                                    <h6 className="text-second">Package Name:</h6>
                                    <h4>{cart.title}</h4>
                                    <img className="my-3 img-fluid rounded-3" src={cart.img} alt="cart img" />
                                    <p>Total Cost: ${cart.cost}k</p>
                                    <h5 className="text-warning">Booked By: </h5>
                                    <div className="p-2 mb-2">
                                        <h6>{cart.name}</h6>
                                        <small className="d-block my-0 fw-light text-second"><i className="pe-1 fas fa-envelope"></i> {cart.email}</small>
                                        <small className="d-block my-0 fw-light text-second"><i className="pe-2 fas fa-map-marker-alt"></i> {cart.address}</small>
                                        <small className="d-block my-0 fw-light text-second"><i className="pe-2 fas fa-calendar-check"></i> {cart.date}</small>
                                    </div>
                                    {
                                            cart.status ? 
                                            ( <p>Satus: <span className="py-0 ms-1 btn btn-success disabled">Accepted</span></p> )
                                            :
                                            ( <p>Satus: <span onClick={() => updateStatus(cart._id)} className="py-0 ms-1 btn btn-danger">Click To Accept</span></p> )
                                    }
                                    <div className="mt-4">
                                        <Link onClick={() => cancelBooking(cart._id)} className="btn btn-warning" to="/managebooking">Delete This Booking</Link>
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

export default ManageBooking;