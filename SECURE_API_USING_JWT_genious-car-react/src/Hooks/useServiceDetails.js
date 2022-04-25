import React, { useEffect, useState } from 'react';

const useServiceDetails = (serviceId) => {

    const [service, setService] = useState({})

    const port = 4005


    const url = `http://localhost:${port}/service/${serviceId}`

    useEffect(() => {

        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => { setService(data) })

    }, [serviceId])
    return [service, setService]

};

export default useServiceDetails;