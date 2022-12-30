import React from 'react';
import { FaComment, FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const StatusFullDetail = () => {
    const sts = useLoaderData();
    const { _id, status, userName, image } = sts;
    console.log('one info',sts)
    return (
        <div>
        <div className="card mt-5  w-96 bg-base-100 shadow-xl">
<div className="card-body">
<h2 className="card-title">{userName?userName:'unknow person'}</h2>

<figure><img src={image} alt="Shoes" /></figure>
<p className='mb-2'>{status}</p>
<div className='flex justify-space-between'>
<p><FaHeart></FaHeart></p>
<p><FaComment></FaComment></p>
</div>
<div className="form-control">
<div className="input-group">
<input type="text" placeholder="Search…" className="input input-bordered" />
<button className="btn ">
  Comment
</button>
</div>
</div>
</div>
<Link className='btn btn-xs  btn-outline btn-info' to='/media'><button >Back</button></Link>

</div>
    </div>
    );
};

export default StatusFullDetail;