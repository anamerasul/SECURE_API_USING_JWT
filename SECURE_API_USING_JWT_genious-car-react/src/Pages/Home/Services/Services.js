import React from 'react';
import Service from '../Service/Service';
import useServicesHook from './../../../Hooks/useServicesHooks'
import './Services.css';

const Services = ({ port }) => {

    const [services] = useServicesHook([]);

    // useEffect(() => {

    //     const url = `http://localhost:${port}/service`
    //     console.log(url)

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    // const { id } = services._id
    // console.log(id);




    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;