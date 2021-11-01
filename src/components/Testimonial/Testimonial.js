import React from 'react';
import qu from '../../img/qu.png';
import qd from '../../img/qd.png';

const Testimonial = () => {

    return (
        <div className="container">
            <h2 className="text-center">What Our <span className="border-3 border-bottom border-warning">Clients Say Ab</span>out Us?</h2>
            <div className="pb-5 h-100">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="px-5 pt-3 pb-5">
                                <div className="px-5 my-5 shadow-lg w-100 bg-light rounded-20">
                                    <div className="py-5 mx-5">
                                        <img className="col-1 d-block img-fluid" src={qu} alt="qoute up" />
                                        <p className="mx-auto col-sm-8">Ei Panir Moto Easy Peasy Assignment E Tomake Swagotom.... Kotha Hobe Next Video Te!!</p>
                                        <img className="col-1 img-fluid d-block ms-auto" src={qd} alt="qoute down" />
                                    </div>
                                    <img width="200" className="mx-auto rounded-circle d-block" src="https://i.ibb.co/mRtxwt4/10541861-10152171247621891-8087044896499484295-o.jpg" alt="jhankar vai" />
                                    <div className="pb-5 mt-3 text-center">
                                        <h4>Jhankar Mahbub</h4>
                                        <small><span className="text-second">Sr. Web Developer </span> <span className="px-2">at</span> <span className="text-warning">The Nielsen Company</span></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="carousel-item">
                        <div className="px-5 pt-3 pb-5">
                            <div className="px-5 my-5 shadow-lg w-100 bg-light rounded-20">
                                <div className="px-5 mx-5">
                                    <img className="col-1 d-block img-fluid" src={qu} alt="qoute up" />
                                    <p className="mx-auto col-sm-8">Their Services are wonderful and well organized. I personally recommend them.</p>
                                    <img className="col-1 d-block ms-auto img-fluid" src={qd} alt="qoute down" />
                                </div>
                                <img width="200" className="mx-auto rounded-circle d-block" src="https://i.ibb.co/fFqhKH3/14711415-706669282817575-4566277205106379850-o.jpg" alt="karina apu" />
                                <div className="pb-5 mt-3 text-center">
                                    <h4>Karina Islam</h4>
                                    <small><span className="text-second">Software Engineer </span> <span className="px-2">at</span> <span className="text-warning">Citi</span></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="px-5 pt-3 pb-5">
                            <div className="px-5 my-5 shadow-lg w-100 bg-light rounded-20">
                                <div className="px-5 mx-5">
                                    <img className="col-1 d-block img-fluid" src={qu} alt="qoute up" />
                                    <p className="mx-auto col-sm-8">আপনার যদি কোথাও আটকে থাকেন কিংবা এরর খেয়ে বসে থাকেন,  কোন ভাবে তা সমাধান করতে পারছেন না। আপনাদের পূর্ন সহযোগিতা করতে আমাদের সাপোর্ট ইন্সট্রাক্টরগন মিটে আপনার জন্য অপেক্ষা করবে।</p>
                                    <img className="col-1 d-block ms-auto img-fluid" src={qd} alt="qoute down" />
                                </div>
                                <img width="200" className="mx-auto rounded-circle d-block" src="https://i.ibb.co/7jP3Bhs/184970228-3972850696144096-2203961540407078606-n.jpg" alt="tareque vai" />
                                <div className="pb-5 mt-3 text-center">
                                    <h4>Emdadul Hoque Tareque</h4>
                                    <small><span className="text-second">Web Developer </span> <span className="px-2">at</span> <span className="text-warning">Programming Hero</span></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;