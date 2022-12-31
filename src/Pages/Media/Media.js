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
        <div className=''>
            {
                allstatus.map(sts=><ShowSts
                key={sts._id}
                sts={sts}></ShowSts>)
            }
        </div>
    );
};

export default Media;