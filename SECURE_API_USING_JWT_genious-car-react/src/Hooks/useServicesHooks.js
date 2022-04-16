import { useEffect, useState } from 'react';
// import 'dotenv/config'
const useServicesHooks = () => {
    const port = 4005

    const [services, setServices] = useState([]);

    useEffect(() => {

        const uri = `http://localhost:${port}/service`
        // const uri = `${process.env.URL}:${port}/service`
        // const url = `${process.env.URL}`
        // console.log(url)

        fetch(uri)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return [services, setServices]
};

export default useServicesHooks;