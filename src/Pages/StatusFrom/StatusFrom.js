import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const StatusFrom = () => {
    const {user}=useContext(AuthContext);
    console.log(user?.email)
    const imageHostKey=process.env.REACT_APP_imgbb;
    // console.log(imageHostKey)
    const {register,formState: { errors },handleSubmit,reset}=useForm();
    const handleSts=data=>{
        // console.log(data,user.displayName)
        const image =data.img[0];
        const formData= new FormData();
        formData.append('image',image);
        const url =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch (url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            if (imgData.success){
                const sts={
                    status:data.text,
                    image:imgData.data.url,
                    userName:user?.displayName,
                    userEmail:user?.email
                }
                console.log(sts)
                fetch('http://localhost:5000/allstatus',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(sts)
                }
                )
                .then(res=>res.json())
                .then(result=>{
                    toast('status created successfully')
                    reset()
                    console.log(result)
                })
            }
            
        })
        
        

        // formData.append('image',pic)
        // const url=`https://api.imgbb.com/1/upload?&key=718b499ebceb0f158b38ef38529aa38a`
        // fetch(url,{
        //     method:'POST',
        //     body:formData
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })
        // console.log(name,pic)

    }
    return (
        <div>
            <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Share your Status</h2>
                <form onSubmit={handleSubmit(handleSts)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Caption</span></label>
                        <input type="text"
                            {...register("text", {
                                required: "Text  is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.text && <p className='text-red-600'>{errors.text?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Image</span></label>
                        <input type="file"
                            {...register("img", {
                                required: "img is required",
                                
                            })}
                            className="input input-bordered w-full max-w-xs" />
                       
                        {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                    </div>
                    {/* <div className="form-control w-full max-w-xs">
                        <select {...register("category", { required: true })}>
                            <option value="user">User</option>
                            <option value="Seller">Seller</option>
                        </select>
                    </div> */}
                    <input className='btn btn-accent w-full mt-5' value="Post" type="submit" />
                    
                </form>
               
            </div>
        </div>
        </div>
    );
};

export default StatusFrom;