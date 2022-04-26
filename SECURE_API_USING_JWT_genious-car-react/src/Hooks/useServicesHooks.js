import { useEffect, useState } from 'react';
const useServicesHooks = () => {
    const port = 4005

    const [services, setServices] = useState([]);

    useEffect(() => {

        const uri = `http://localhost:${port}/service`
        console.log(uri)

        fetch(uri)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return [services, setServices]



};

export default useServicesHooks;