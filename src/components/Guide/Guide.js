import React from 'react';

const Guide = (props) => {
    const { location, gName, gImg } = props.guide;
    return (
        <div className="p-4 col-lg-3 col-md-4 col-sm-6 text-start">
            <div className="p-4 text-center shadow box rounded-20 h-100">
                <img className="w-100 rounded-circle" src={gImg} alt="guide img" />
                <h5 className="mt-3 text-second">{gName}</h5>
                <p>From {location}</p>
            </div>
        </div>
    );
};

export default Guide;