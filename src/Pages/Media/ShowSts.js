import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';

import { FaHeart ,FaComment} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const ShowSts = ({sts}) => {
  const {user}=useContext(AuthContext);
  const [cmnt,setCmnt]=useState([]);
    const {status,image,userName,_id}=sts;
    console.log('id',sts)
    const { data: allComment = [],refetch,isLoading } = useQuery({
      queryKey: ['userDetail'],
      queryFn: async () => {
          const res = await fetch(`http://localhost:5000/allcomment/${_id}`);
          const data = await res.json();
          return data;
          
      }
  });

    const handleComment=(event)=>{

      event.preventDefault();
      const form = event.target;
      const comment = form.comment.value;
      
      // fetch(`http://localhost:5000/allcomment/${_id}`)
      // .then(res=>res.json())
      // .then(data=>{
      //   setCmnt(data)
      // })
      const commentForDb={
        commentId:_id,
        commentBody:comment

      }
      fetch('http://localhost:5000/allcomment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentForDb)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    refetch()
                }
                console.log(data)
            })
            .catch(err => console.error(err))
      console.log(commentForDb)

    }
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
  <form className='ml-1' onSubmit={handleComment}>
                <div className="form-control">
                    <label className="input-group input-group-md">
                       
                        <input  type="text" name='comment' placeholder="to commnet login please" className="input input-bordered input-md" />

                        {
                          user?.uid?<button className='btn btn-primary ml-3'>Submit</button> : <button disabled className='btn btn-primary ml-3'>Submit</button>
                        }
                            
                        


                    </label>
                    
                </div>
            </form>


    {/* <form onSubmit={handleComment()}>
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button  className="btn ">
      Comment
    </button>
    </form> */}

  </div>
</div>
<p>All commnet</p>
{
    allComment.map(cmnt=><p>{cmnt.commentBody}</p>)
  }
  </div>
 
</div>
        </div>
    );
};

export default ShowSts;