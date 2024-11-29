import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tea from './Tea';

const Teas = () => {
    const teas = useLoaderData()
    const [loadedTea,setLoadedTea]=useState(teas)
    // console.log(loadedTea)
    return (
        <div className='grid grid-cols-2 justify-items-center  gap-6 px-9 mt-9'>
            {
            loadedTea.map(tea=><Tea key={tea._id} teas={tea} loadedTea={loadedTea} setLoadedTea={setLoadedTea}></Tea>)
           }
           {/* <h2>fsd</h2> */}
        </div>
    );
};

export default Teas;