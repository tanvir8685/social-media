import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditAbout = ({userDetail}) => {
    const{_id,address,university,userName,userEmail}=userDetail;
    const {register,formState: { errors },handleSubmit,reset}=useForm();
    const handleLogin=data=>{
        console.log(data)
        toast('succsessfully added click cross to see update')
    }
    return (
        <div>
{/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <form onSubmit={handleSubmit(handleLogin)}>
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" defaultValue={userName}
                            {...register("name" )}
                            className="input input-bordered w-full max-w-xs" />
                       
    </div>
    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" defaultValue={userEmail}
                            {...register("email")}
                            className="input input-bordered w-full max-w-xs" />
                        
    </div>
    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Address</span></label>
                        <input type="text" defaultValue={address}
                            {...register("address")}
                            className="input input-bordered w-full max-w-xs" />
                        
                    </div>
    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">university</span></label>
                        <input type="text" defaultValue={university}
                            {...register("university")}
                            className="input input-bordered w-full max-w-xs" />
                       
                    </div>
    
    <input className='btn btn-accent w-full my-3' value="Update" type="submit" />
    </form>    
  </div>
</div>
</div>
    );
};

export default EditAbout;