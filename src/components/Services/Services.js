import React from 'react';
import service1 from '../../img/s1.png';
import service2 from '../../img/s2.png';
import service3 from '../../img/s3.png';
import service4 from '../../img/s4.png';

const Services = () => {
    return (
        <section className="container py-3 my-5 text-center">
                <small className="text-second">Category</small>
                <h2 className="mb-5 fw-bolder">We Off<span className="border-4 border-bottom border-warning">er Best Se</span>rvices</h2>
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="p-3 m-3 shadow btn box rounded-20 h-100">
                            <img className="img-fluid" src={service1} alt="service img" />
                            <h6>Best Flights</h6>
                            <small className="text-second">Fly in Business or First Class on any airlines to major cities of Europe, Asia, Africa, Middle east, Ociania etc.</small>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="p-3 m-3 shadow btn box rounded-20 h-100">
                            <img className="img-fluid" src={service2} alt="service img" />
                            <h6>Calculated Weather</h6>
                            <small className="text-second">Weather forecasts are made by collecting as much data as possible about the current state of the atmosphere.</small>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="p-3 m-3 shadow btn box rounded-20 h-100">
                            <img className="img-fluid" src={service3} alt="service img" />
                            <h6>Local Events</h6>
                            <small className="text-second">A festival is an event ordinarily celebrated by a community and centering on some characteristic aspect of that community.</small>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="p-3 m-3 shadow btn box rounded-20 h-100">
                            <img className="img-fluid" src={service4} alt="service img" />
                            <h6>Customization</h6>
                            <small className="text-second">Once you've booked your suitable package, you can edit the dates before one week if any emergency or accidents happens.</small>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Services;