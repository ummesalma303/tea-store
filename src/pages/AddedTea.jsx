import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { NavLink, useLoaderData } from 'react-router-dom';

const AddedTea = () => {
  const navigate = useNavigate()
  const handleTeaForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const user = { name, email, photo };
    console.log(user)

    fetch("http://localhost:5000/tea", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json(user))
      .then((data) => {
        if ( data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Successfully added",
            icon: "success"
          });
          navigate('/allTea')
          e.target.reset()
        }
      })
      .catch(err=>console.log("ERROR:",err))
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleTeaForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="photo"
              name="photo"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Tea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddedTea;
