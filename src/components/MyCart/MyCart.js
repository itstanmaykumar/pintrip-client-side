import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyCart = () => {
    const { user } = useAuth;
    const [carts, setCarts] = useState([]);

    useEffect(() =>{
        fetch("https://infinite-harbor-27081.herokuapp.com/bookedTrip")
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
                <h3 className="mt-5 fw-bolder">Package Trips</h3>
                <p className="pb-3 col-12 text-second">Explore The Various Trips We Offer And Find Your Suitable Trip!</p>
                <div className="row g-4">
                    {
                        carts.map((cart) => (
                            <div key={cart._id} className="p-4 col-lg-4 col-md-6 text-start">
                                <div className="p-4 shadow box rounded-20 h-100">
                                    <h6 className="text-second">Package Name:</h6>
                                    <h4>{cart.title}</h4>
                                    <p>Total Cost: ${cart.cost}k</p>
                                    <h5 className="text-warning">Booked By: </h5>
                                    <div className="p-3">
                                        <h6>{cart.name}</h6>
                                        <p className="my-0 fs-6 fw-light text-second">Email: {cart.email}</p>
                                        <p className="my-0 fs-6 fw-light text-second">Address: {cart.address}</p>
                                        <p className="my-0 fs-6 fw-light text-second">Date: {cart.date}</p>
                                    </div>
                                    {
                                            cart.status ? 
                                            ( <p>Satus: <span className="py-0 ms-3 btn btn-sucess">Accepted</span></p> )
                                            :
                                            ( <p>Satus: <span className="py-0 ms-3 btn btn-danger">Pending</span></p> )
                                    }
                                    <div className="mt-4">
                                        <Link onClick={() => cancelBooking(cart._id)} className="btn btn-warning" to="/mycart">Cancel Booking</Link>
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

export default MyCart;