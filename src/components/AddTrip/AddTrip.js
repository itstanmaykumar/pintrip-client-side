import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddTrip = () => {

    const refTitle = useRef(); 
    const refLocation = useRef(); 
    const refType = useRef(); 
    const refRating = useRef();
    const refImg = useRef();
    const refDescription = useRef();
    const refAccommodations = useRef();
    const refTransportation = useRef();
    const refCost = useRef();
    const refDuration = useRef();
    const refPerson = useRef();
    const refGroup = useRef();
    const refgName = useRef();
    const refExp = useRef();
    const refgImg = useRef();
    const history = useHistory();

    const [trips, setTrips] = useState([]);

    useEffect(() =>{
        fetch("https://infinite-harbor-27081.herokuapp.com/trips")
        .then(res => res.json())
        .then(data => setTrips(data))
    },[]);

    const handleAddNewTrip = (e) => {
        const title = refTitle.current.value;
        const location = refLocation.current.value;
        const type = refType.current.value;
        const rating = parseFloat(refRating.current.value);
        const img = refImg.current.value;
        const description = refDescription.current.value;
        const accommodations = refAccommodations.current.value;
        const transportation = refTransportation.current.value;
        const cost = parseFloat(refCost.current.value);
        const duration = parseInt(refDuration.current.value);
        const person = parseInt(refPerson.current.value);
        const group = parseInt(refGroup.current.value);
        const gName = refgName.current.value;
        const exp = parseInt(refExp.current.value);
        const gImg = refgImg.current.value;
        const id = trips.length;

        const newTrip = { id, title, location, type, rating, img, description, accommodations, transportation, cost, duration, person, group, gName, exp, gImg };

        axios.post("https://infinite-harbor-27081.herokuapp.com/trips",newTrip)
        .then(res => {
            if(res.data.insertedId){
                alert("Trip Added Suceessfully!!");
                history.push("/trips");
            }
        })
        e.preventDefault();
    }

    return (
        <div className="container mb-5">
            <h1 className="mt-5 mb-2 text-center">Ad<span className="border-3 border-bottom border-warning">d A New Tr</span>ip</h1>
            <div className="py-3 row justify-content-between align-items-center">
                <div className="">
                    <form onSubmit={handleAddNewTrip} className="p-5 mt-5 bg-light rounded-20">
                        <h3 className="mt-4 mb-0 text-center">Please Fill This Form</h3>
                        <small className="mb-3 text-center text-warning d-block">You Must Fill Up This Form To Add A New Package</small>
                        <div className="my-4">
                            <label htmlFor="title" className="form-label">Package Title</label>
                            <input ref={refTitle} type="text" className="form-control" id="title" placeholder=" Title Here" required />
                        </div>
                        <div className="my-4">
                            <label htmlFor="img" className="form-label">Package Cover Image Url (Dimention 8x3.5)</label>
                            <input ref={refImg} type="url" className="form-control" id="img" placeholder=" https://omuktomuk.com/pHero.jpg"  required />
                        </div>
                        <div className="my-4">
                            <label htmlFor="location" className="form-label">Trip Destination</label>
                            <input ref={refLocation} type="text" className="form-control" id="location" placeholder=" Destination Name"  required />
                        </div>
                        <div className="row justify-content-between">
                            <div className="my-4 col-lg-5">
                                <label htmlFor="rating" className="form-label">Rating Out Of 5</label>
                                <input ref={refRating} type="text" className="form-control" id="rating" placeholder=" 4.5"  required />
                            </div>
                            <div className="my-4 col-lg-5">
                                <label htmlFor="booktime" className="form-label">Package Type</label>
                                <select ref={refType} className="form-select">
                                    <option value="Premium">Premium</option>
                                    <option value="Ultimate">Ultimate</option>
                                    <option value="Economy">Economy</option>
                                </select>
                            </div>
                        </div>
                        <div className="my-4">
                            <label htmlFor="description" className="form-label">Package Description</label>
                            <textarea ref={refDescription} className="mt-3 form-control" rows="4" id="description" placeholder=" Please Write Some Descriptions Here" required/>
                        </div>
                        <div className="my-4">
                            <label htmlFor="accommodations" className="form-label">Accommodations Details</label>
                            <textarea ref={refAccommodations} className="mt-3 form-control" rows="3" id="accommodations" placeholder=" Please Write About Accommodations" required/>
                        </div>
                        <div className="my-4">
                            <label htmlFor="transportation" className="form-label">Transportation Details</label>
                            <textarea ref={refTransportation} className="mt-3 form-control" rows="3" id="transportation" placeholder=" Please Write About Transportation" required/>
                        </div>
                        <div className="row justify-content-between">
                            <div className="my-4 col-lg-5">
                                <label htmlFor="cost" className="form-label">Price of This Package</label>
                                <input ref={refCost} type="text" className="form-control" id="cost" placeholder="'7' will mean $7k" required />
                            </div>
                            <div className="my-4 col-lg-5">
                                <label htmlFor="duration" className="form-label">Number Of Days</label>
                                <input ref={refDuration} type="number" className="form-control" id="duration" placeholder=" 7" required />
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="my-4 col-lg-5">
                                <label htmlFor="person" className="form-label">Person Per Package</label>
                                <input ref={refPerson} type="number" className="form-control" id="person" placeholder=" 1" required />
                            </div>
                            <div className="my-4 col-lg-5">
                                <label htmlFor="group" className="form-label">Maximum Persons Per Group</label>
                                <input ref={refGroup} type="number" className="form-control" id="group" placeholder=" 8" required />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4>Tour Guide</h4>
                            <div className="row justify-content-between">
                                <div className="my-4 col-lg-5">
                                    <label htmlFor="gName" className="form-label">Guide Name</label>
                                    <input ref={refgName} type="text" className="form-control" id="gName" placeholder=" John Smith"  required />
                                </div>
                                <div className="my-4 col-lg-5">
                                    <label htmlFor="exp" className="form-label">Experience in Years</label>
                                    <input ref={refExp} type="number" className="form-control" id="exp" placeholder=" 5"  required />
                                </div>
                            </div>
                            <div className="my-4">
                                <label htmlFor="gImg" className="form-label">Guide Image Url (Dimention 1x1)</label>
                                <input ref={refgImg} type="url" className="form-control" id="gImg" placeholder=" https://omuktomuk.com/pHero.jpg"  required />
                            </div>
                        </div>
                        <button type="submit" to="/trips" className="px-4 py-2 mx-auto mt-5 fs-4 btn d-block btn-warning">Add This Package</button>
                    </form>
                </div>
            </div>
          </div>
    );
};

export default AddTrip;