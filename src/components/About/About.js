import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import Guide from '../Guide/Guide';

const About = () => {
    const [guides, setGuides] = useState([]);

    useEffect(() =>{
        fetch("https://infinite-harbor-27081.herokuapp.com/trips")
        .then(res => res.json())
        .then(data => setGuides(data))
    },[]);

    return (
        <div>
            <section className="container my-5">
                <h3 className="text-center text-second">"Blessed are the curious, for they shall have adventures.”</h3>
                <div className="mx-auto my-5 text-center col-lg-6">
                    <div className="">
                        <Link className="mt-5 navbar-brand" to="/home">
                            <img className="me-2" width="50" src={logo} alt="pintrip logo" />
                            <span className="fs-1 text-warning">pintrip</span>
                        </Link>
                        <p className="px-5 mt-3 text-second">a leading tour Operator at Bangladesh. We are provide Bangladesh and world wide Tour Package, Hotel booking and air ticket services.</p>
                    </div>
                </div>
            </section>
            <section className="container">
                <h2 className="mb-5 text-center">Why <span className="border-4 border-bottom border-warning">Should We T</span>ravel?</h2>
                <p className="fw-light">
                    As the sun rises on a new day, we look out on the horizon and commit to be a better version of ourselves. This year we will travel more. We ponder the exotic locations we hope to find ourselves in. We think of the adventures we’ll go on and the people we’ll meet. We begin to formulate plans, research trips, and save money. But, as the year progresses, most of us will abandon those dreams, forever pushing them off as life throws us curveballs and seems to want to get in our way. We’ll find a reason why today just isn’t the right day.
                    <br />
                    <br />
                    “Tomorrow,” we’ll say to ourselves. “Today isn’t perfect, and I just have too many things to do. Now is not the right time.” The right time is when we have more money, more time off, or when things aren’t so “crazy.” Then we’ll be able to travel. We just need the stars to align a little more. But here’s a secret: there’s never going to be a right time to travel. The idea that the stars will align and you’ll find the perfect day to step out of your door and into the world is fantasy. Today might not be the perfect day — but neither is tomorrow.
                    <br />
                    <br />
                    Tomorrow, you’ll find another excuse why you can’t go. Tomorrow, there will still be more bills to pay. Tomorrow, there still won’t be “enough” money. Tomorrow, there will still be someone’s wedding or birthday party to attend. Tomorrow, there will still be more planning to do. Tomorrow, people you know will still sow the seeds of doubt in your head. Tomorrow, you’ll still worry about all the bad stuff that might happen to you. Tomorrow, you still won’t know if you’re making the right decision. Tomorrow, you will still second-guess yourself. Tomorrow, something else will come up and you’ll say to yourself, “Today isn’t the right day. Let’s try again tomorrow.” Tomorrow will never be perfect. Because there is no such thing as perfection.
                    <br />
                    <br />
                    The hardest part of any journey is stepping out the door. And one of the key components to making that first step easier is to understand that the stars will never align and there will never be the right moment to travel. You just have to go. You have to leap. You have to trust yourself that it will all work out. Because it will. Ships aren’t mean to stay in a harbor. You weren’t meant to stay at home and wonder “what if?” Because one day, you’ll run out of tomorrows. And you’ll be filled with nothing but sadness and regret. So stop waiting. Stop making excuses.
                    <br />
                    <br />
                    <span className="text-center fw-bold">You’re capable of doing great things. But only if you start today!</span>
                </p>
                <div className="pb-5 my-5">
                    <Link className="btn btn-warning" to="/trips">Book A Trip Today!</Link>
                </div>
            </section>
            <section className="container">
                <h2 className="mb-5 text-center">Meet O<span className="border-4 border-bottom border-warning">ur Experince</span>d Guides</h2>
                <div className="row g-4">
                    {
                        guides.map((guide) => (
                            <Guide key={guide.id} guide={guide}></Guide>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default About;