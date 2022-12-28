import React from 'react';

const ShowSts = ({sts}) => {
    const {status,image,userName}=sts;
    return (
        <div>
            <div className="card mt-5  w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{userName}</h2>
    <figure><img src={image} alt="Shoes" /></figure>
    <p className='mb-2'>{status}</p>
    <div className='flex'>
    <p>Love button</p>
    <p>Comment button</p>
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