import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Tea = ({teas,loadedTea,setLoadedTea}) => {
    const {_id,name,email,photo}= teas
    // console.log(loadedTea)
    const handleDelete=(id)=>{




        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/tea/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    // console.log(data)
                    // alert('successfully delete')
                  if (data.acknowledged) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                    const remaining= loadedTea.filter(tea=>tea._id !== id)
                    setLoadedTea(remaining)
                  }
                })



             
            }
          });







        // console.log(id)
        // fetch(`http://localhost:5000/tea/${id}`,{
        //     method:"DELETE"
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     alert('successfully delete')
        //     const remaining= loadedTea.filter(tea=>tea._id !== id)
        //     setLoadedTea(remaining)
        // })
    }
    return (
        <div className='card-body border-2'>
            <img src={photo} alt="" />
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            
            <div className='space-x-2 my-4'>
            <NavLink to={`/UpdateTea/${_id}`}><button className='btn btn-accent text-white'>Update</button></NavLink>
            <button onClick={()=>handleDelete(_id)} className='btn bg-red-400 text-white'>Delete</button>
            </div>
        </div>
    );
};

export default Tea;