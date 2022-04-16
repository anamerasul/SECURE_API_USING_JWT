import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../Hooks/useServiceDetails';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from "axios";
import { toast } from 'react-toastify';
const Checkout = ({ url }) => {
    // console.log(url)
    const path = `order`
    const { serviceId } = useParams()
    const [service] = useServiceDetails(serviceId)

    // const [user, setUser] = useState({
    //     name: 'AkBAR',
    //     email: 'akbar@akbar.com',
    //     address: 'abc road',
    //     phone: '4654365'
    // })

    const [user] = useAuthState(auth);
    const handleAddressChange = e => {
        const address = e.target.value
        // console.log(e.target.value)
        // const { address, ...rest } = user

        // const Newaddress = e.target.value
        // const newUser = { address: Newaddress, ...rest }

        // setUser(newUser)

        // console.log(address, rest)
        return address
    }

    const handlePlaceOrder = (event) => {
        event.preventDefault()
        // const order = {
        //     name: user.displayName,
        //     email: user.email,
        //     service: service.name,
        //     serviceId: serviceId,
        //     address: e.target.address.value,
        //     phone: e.target.phone.value
        // }


        // axios.post('http://localhost:4005/order', order)
        //     .then(res => {
        //         console.log(res)

        //         const { data } = res

        //         if (data.insertedID) {
        //             toast('your order book')
        //             e.target.reset()
        //         }
        //     })


        // console.log(order);

        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post(`${url}/${path}`, order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }
    return (
        <div className="w-50 mx-auto">
            <PageTitle title="Checkout"></PageTitle>
            <h2>Please Checkout your booking</h2>
            <h4>please order {service.name}</h4>
            <form onSubmit={handlePlaceOrder}>
                {/* <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">NAME</label>
                    <input type="text" name='name' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button> */}

                <input className='w-100 mb-2' type="text" readOnly disabled name="name" placeholder="name" value={user?.displayName} required /><br />
                <input readOnly disabled className='w-100 mb-2' type="email" name="email" placeholder="email" value={user?.email} required /><br />
                <input className='w-100 mb-2' type="text" name="service" disabled readOnly placeholder="service" value={service.name} required /><br />
                <input className='w-100 mb-2' type="text" name="address" onChange={handleAddressChange} placeholder="address" value={user.address} required /><br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder="phone" value={user.phone} required /><br />
                <input className="btn btn-primary" type="submit" value="place order" />
            </form>
        </div>
    );
};

export default Checkout;