import React from 'react';
import { NavLink } from 'react-router-dom';

const Tea = ({teas}) => {
    const {_id,name,email,photo}= teas
    // console.log(name,email,photo)
    const updatedTea=(id)=>{
        console.log(id)
    }
    return (
        <div className='card-body border-2'>
            <img src={photo} alt="" />
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            
            <div className='space-x-2 my-4'>
            {/* <NavLink to={`/UpdateTea/${_id}`}><button className='btn btn-accent text-white' onClick={()=>updatedTea(_id)}>Update</button></NavLink>
            <button className='btn bg-red-400 text-white'>Delete</button> */}
            </div>
        </div>
    );
};

export default Tea;