import React from 'react';

import { FaHeart ,FaComment} from "react-icons/fa";
import { Link } from 'react-router-dom';
const ShowSts = ({sts}) => {
    const {status,image,userName,_id}=sts;
    return (
        <div>
            <div className="card mt-5  w-96 bg-base-100 shadow-xl">
  <div className="card-body">
  <div className='flex justify-between items-stretch'>
  <h2 className="card-title">{userName?userName:'unknow person'}</h2>

    <Link className='btn btn-xs' to={`/status/${_id}`}>Detail</Link>
  </div>
    
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
  
</div>
        </div>
    );
};

export default ShowSts;