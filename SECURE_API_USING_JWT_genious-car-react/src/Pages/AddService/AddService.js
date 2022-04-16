import React from 'react';
import { useForm } from "react-hook-form";
const AddService = ({ url}) => {
    console.log(url)

    const path=`/service`

    const uri = `${url}${path}`

    console.log(uri)
    // console.log(port)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        // console.log(data);
        fetch(uri, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }




    return (
        <div>

            <h2>Add service</h2>

            <form className="w-50 mx-auto d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 " placeholder="name"  {...register("description")} />
                <textarea className="mb-3 " placeholder="description" {...register("name", { required: true })} />
                <input className="mb-3 " placeholder="photo Url" type="text" {...register("img", { required: true })} />
                <input className="mb-3 " placeholder="price" type="number" {...register("price")} />
                <input type="submit" value="ADD SERVICE" />
            </form>

        </div>
    );
};

export default AddService;