import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTea = () => {
    const teas=useLoaderData()
    const { _id,name,email,photo}=teas 
    // console.log(teas)
    const updateTea=e=>{
        e.preventDefault()
        const name= e.target.name.value
        const email= e.target.email.value
        const photo= e.target.photo.value
        const user = {name,email,photo}
        // console.log(user)


        fetch(`http://localhost:5000/tea/${_id}`,{
            method:"PUT",
            headers:{
                "content-type": 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          if (data.acknowledged) {
            // alert('successfully update')
            Swal.fire({
              title: "Success",
              text: "Successfully update",
              icon: "success"
            });
          }
        })



    }
    return (
        <div>
             <div className="flex justify-center items-center h-screen">
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={updateTea} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo" name='photo' className="input input-bordered"  defaultValue={photo}/>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" defaultValue={email}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required defaultValue={name}/>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Update Tea</button>
        </div>
      </form>
    </div>
         </div>
        </div>
    );
};

export default UpdateTea;