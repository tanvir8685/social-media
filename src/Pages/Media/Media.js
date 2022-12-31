import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ShowSts from './ShowSts';

const Media = () => {
    const {data: allstatus=[]}= useQuery({
        queryKey:['allstatus'],
        queryFn:async()=>{
            const res=await fetch('https://social-media-server-two.vercel.app/allstatus');
            const data=await res.json();
            return data
        }

    })
    return (
        <div className='grid  place-items-center h-auto  bg-gradient-to-r from-gray-300 via-gray-500 to-grey-800 '>
            {
                allstatus.map(sts=><ShowSts
                key={sts._id}
                sts={sts}></ShowSts>)
            }
        </div>
    );
};

export default Media;