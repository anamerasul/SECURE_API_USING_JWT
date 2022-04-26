import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
const Order = ({ url }) => {

    const [user] = useAuthState(auth)

    console.log(url)
    const path = `/order`
    const email = user.email

    const uri = `${url}${path}?email=${email}`

    const [orders, setOrders] = useState({})


    useEffect(() => {

        const getOrders = async () => {

            const { data } = await axios.get(uri)
            setOrders(data)
            console.log(uri)

        }
        getOrders()


    }, [user])


    return (
        <div>
            <h2>your order :{orders.length}</h2>
        </div>
    );
};

export default Order;