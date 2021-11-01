import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://haunted-barrow-22037.herokuapp.com/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <img src={service.img} alt="" />
            <h2>{service.name}</h2>
            <h2>This is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;