import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    // const [data,setData]=useState('');
    const {register,formState: { errors },handleSubmit,reset}=useForm();
    const [loginError,setLoginError]=useState('');
    const {signIn,googleSignIn}=useContext(AuthContext);
    const location=useLocation();
    const navigate= useNavigate();
    const from =location.state?.from?.pathname||'/'

    const handleLogin=data=>{
        setLoginError('')
        console.log(data)
        signIn(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate (from,{replace:true})
            toast('login success')
            reset()
        })
        .catch(error=>
            {console.log(error.message)
            setLoginError(error.message)
            })
            
    }
    const googleLogIn=()=>{
        googleSignIn(provider)
          .then((result) => {
            
            const user = result.user;
            
            console.log(user)
            
          }).catch((error) => {
            console.log(error)
            
          });

    }
    const provider = new GoogleAuthProvider();
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-5xl font-bold text-center mb-6'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text"></span></label>
                        <input type="email" placeholder='Put Your Email Here'
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text"></span></label>
                        <input type="password" placeholder='Type Password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text"></span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-outline w-full text-white' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='text-lg font-semibold'>New to OnlineHUB <Link className='text-black' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button  onClick={googleLogIn} className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
        </div>
    );
};

export default Login;