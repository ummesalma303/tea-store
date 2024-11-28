import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tea from './Tea';

const Teas = () => {
    const teas = useLoaderData()
    console.log(teas)
    return (
        <div className='grid grid-cols-2 justify-items-center  gap-6 px-9 mt-9'>
            {/* {
            teas.map(tea=><Tea key={tea._id} teas={tea}></Tea>)
           } */}
           <h2>fsd</h2>
        </div>
    );
};

export default Teas;