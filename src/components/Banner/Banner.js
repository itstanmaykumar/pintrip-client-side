import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../img/banner.png';

const Banner = () => {
    return (
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="my-3 col-lg-6 pe-4">
                    <p className="py-0 my-0 text-warning">BEST DESTINATIONS AROUND THE WORLD</p>
                    <h1 className="mb-4">Travel, enjoy and live a new and full life</h1>
                    <small className="py-2 d-block text-second">The hardest part of any journey is stepping out the door. You weren’t meant to stay at home and wonder “what if?” Because one day, you’ll run out of tomorrows. And you’ll be filled with nothing but sadness and regret. So stop waiting. Stop making excuses. You’re capable of doing great things. But only if you start today!</small>
                    <Link className="mt-3 mb-5 btn btn-warning" to="/trips">Book A Trip Now</Link>
                </div>
                <div className="my-3 col-lg-6">
                    <img className="img-fluid" src={bannerImg} alt="banner img" />
                </div>
            </div>
        </div>
    );
};

export default Banner;