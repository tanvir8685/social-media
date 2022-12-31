import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const[signUpError,setSignUpError]=useState('');
    const {createUser,updateUser}=useContext(AuthContext);

    const handleSignUp=data=>{
        setSignUpError('')
        // console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            const user =result.user;
            toast('user created succesfully')
            console.log(user)
            reset();
           
            const userInfo={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{
                const info={
                    address:data.address,
                    university:data.university,
                    userName:user?.displayName,
                    userEmail:user?.email
                }
                fetch('https://social-media-server-two.vercel.app/alluser',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(info)
                }
                )
                .then(res=>res.json())
                .then(result=>{
                    
                    
                    console.log(result)
                })
                
            })
            .catch(err=>console.log(err))
        })
        .catch(error=>{
            console.log(error)
            setSignUpError(error.message)
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Address</span></label>
                    <input type="text" {...register("address", {
                        required: "Address is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">university</span></label>
                    <input type="text" {...register("university", {
                        required: "University is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.university && <p className='text-red-500'>{errors.university.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
            

        </div>
    </div>
    );
};

export default SignUp;