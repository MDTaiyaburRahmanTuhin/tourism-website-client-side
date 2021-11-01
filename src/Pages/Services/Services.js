import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://haunted-barrow-22037.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>Our Services</h2>
            <div>

                <div className="container">
                    <div className="row row-cols-3">
                        {
                            services.map((service, index) => <Service
                                key={service._id}
                                service={service}
                                index={index}
                                services={services}
                            ></Service>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;