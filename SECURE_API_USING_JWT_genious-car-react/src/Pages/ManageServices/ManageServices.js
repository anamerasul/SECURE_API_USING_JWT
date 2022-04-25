import React from 'react';
import useServicesHook from './../../Hooks/useServicesHooks'
const ManageServices = ({ port }) => {

    const [services, setServices] = useServicesHook([]);

    const handleDeleteBtn = (id )  => {
        // const procced = window.confirm("are you sure")
        const url = `http://localhost:${port}/service/${id}`;
        // if (procced) {

        //     const url = `http://localhost:${port}/service/${id}`

        //     console.log(url)
        //     fetch(url, {
        //         method: 'DELETE'
        //     })
        //         .then(res => res.json())
        //         .then(data => {

        //             // const remaining = services.filter(service => service._id !== id);

        //             // console.log([])

        //             // setServices(remaining)

        //             console.log(data)
        //         })

        // }


        const proceed = window.confirm('Are you sure?');
        if (proceed) {
           
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }

    }
    return (
        <div className="w-50 mx-auto">
            <h2>Mange Services</h2>

            {
                services.map(service => <div className='border p-2 my-3' key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDeleteBtn(service._id)} className="btn btn-danger">X</button></h5>


                </div>)
            }

        </div>
    );
};

export default ManageServices;