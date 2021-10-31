import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import news from '../../img/news.png';

const Newsletter = () => {
    const { user } = useAuth();
    return(
            <section className="container">
                <div className="py-3 row justify-content-between align-items-center">
                    <div className="col-md-6">
                        <h2>Connect With Us</h2>
                        <p className="text-warning">Get Notified Upon New Updates or Offers</p>
                        <form className="mt-5 mb-4 me-5 pe-5">
                            <input className="form-control" type="email" name="email" id="email" placeholder={user.email} />
                        </form>
                        <Link className="mb-4 btn btn-warning" to="/subscribed">Subscribe</Link>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={news} alt="newsletter" />
                    </div>
                </div>
          </section>
    );
};
export default Newsletter;