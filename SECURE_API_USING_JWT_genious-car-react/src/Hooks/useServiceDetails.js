import React, { useEffect, useState } from 'react';

const useServiceDetails = (serviceId) => {

    const [service, setService] = useState({})

    const port = 4005


    const uri = `http://localhost:${port}/service/${serviceId}`
    // const uri = `${process.env.URL}/service/${serviceId}`

    useEffect(() => {

        // console.log(url);
        fetch(uri)
            .then(res => res.json())
            .then(data => { setService(data) })

    }, [serviceId])
    return [service, setService]

};

export default useServiceDetails;