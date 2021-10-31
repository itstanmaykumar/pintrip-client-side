import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import msg from '../../img/msg.png';
import Newsletter from '../Newsletter/Newsletter';

const Contact = () => {
    const { user } = useAuth();
    return (
        <div>
            <Newsletter></Newsletter>
            <section className="container">
                <div className="py-3 row justify-content-between align-items-center">
                    <div className="col-md-6 order-md-2">
                        <h2>Contact With Us</h2>
                        <p className="text-warning">Get Notified Upon New Updates or Offers</p>
                        <form className="mt-5 mb-4 me-5 pe-5">
                            <input className="form-control" type="text" name="name" id="name" placeholder={user.displayName} disabled />
                            <input className="mt-3 form-control" type="email" name="email" id="email" placeholder={user.email} disabled />
                            <textarea className="mt-3 form-control" rows="3" placeholder="Let Us Know Your Thoughts.." />
                        </form>
                        <Link className="mb-4 btn btn-warning" to="/subscribed">Subscribe</Link>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img className="img-fluid" src={msg} alt="newsletter" />
                    </div>
                </div>
          </section>
        </div>
    );
};

export default Contact;