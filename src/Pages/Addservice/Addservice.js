import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);
        axios.post('https://haunted-barrow-22037.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <h2>Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <input className='p-3 m-3 w-50' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <br />
                <input className='p-3 m-3  w-50' {...register("description",)} placeholder='Description' />
                <br />
                <input className='p-3 m-3  w-50' type="number" {...register("price")} placeholder='Price' />
                <br />
                <input className='p-3 m-3  w-50' {...register("img",)} placeholder='image url' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;