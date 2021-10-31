import React from 'react';
import step1 from '../../img/step (1).png';
import step2 from '../../img/step (3).png';
import step3 from '../../img/step (2).png';

const BookSteps = () => {
    return (
        <section className="container my-5">
            <div className="my-3">
                <small className="text-second">Easy and Fast</small>
                <h2 className="mb-3 fw-bolder">Book Your Next Trip in 3 Esay Steps</h2>
                <div className="px-4 row justify-content-between">
                    <div className="py-3 my-2 shadow rounded-20 col-xl-3 col-md-5 row justify-content-between align-items-center">
                        <div className="col-4">
                            <img className="img-fluid" src={step1} alt="step img" />
                        </div>
                        <div className="col-8">
                            <p className="py-0 my-0 text-second">Choose Trip Package</p>
                        </div>
                    </div>
                    <div className="py-3 my-2 shadow rounded-20 col-xl-3 col-md-5 row justify-content-between align-items-center">
                        <div className="col-4">
                            <img className="img-fluid" src={step2} alt="step img" />
                        </div>
                        <div className="col-8">
                            <p className="py-0 my-0 text-second">Make Payment</p>
                        </div>
                    </div>
                    <div className="py-3 my-2 shadow rounded-20 col-xl-3 col-md-5 row justify-content-between align-items-center">
                        <div className="col-4">
                            <img className="img-fluid" src={step3} alt="step img" />
                        </div>
                        <div className="col-8">
                            <p className="py-0 my-0 text-second">Reach Airport on Selected Date</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookSteps;