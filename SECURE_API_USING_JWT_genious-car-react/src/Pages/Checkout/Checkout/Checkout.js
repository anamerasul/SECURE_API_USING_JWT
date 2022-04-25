import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../Hooks/useServiceDetails';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Checkout = () => {

    const { serviceId } = useParams()
    const [service] = useServiceDetails(serviceId)
    return (
        <div className="w-50 mx-auto">
            <PageTitle title="Checkout"></PageTitle>
            <h2>Please Checkout your booking</h2>
            <h4>please order {service.name}</h4>
            <form>
                <div className="mb-3">
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Checkout;