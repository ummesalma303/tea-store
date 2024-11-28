import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    // const data=useLoaderData()
    // console.log(data)
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center space-y-3'>
                {/* <h3>category: {data.length}</h3> */}
           <h1>I have no data now. Please click added tea</h1>
           <button className='btn btn-accent text-white' onClick={()=>navigate('/tea')}>Add Tea</button>
            </div>
        </div>
    );
};

export default Home;