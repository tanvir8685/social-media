import { useQuery } from '@tanstack/react-query';
import React, { useContext,  } from 'react';

import { AuthContext } from '../../contexts/AuthProvider';
import EditAbout from './EditAbout';

const About = () => {

    const { user } = useContext(AuthContext);
    console.log(user?.email)

    const { data: userDetail = [],refetch, } = useQuery({
        queryKey: ['userDetail'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/alluser?userEmail=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });






    // const[userDetail,setUserDetail]=useState({});
    // useEffect(() => {
    //     fetch(`http://localhost:5000/alluser?userEmail=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setUserDetail(data))
    // }, [user?.email])
    const{_id,address,university,userName,userEmail}=userDetail;
    console.log(userDetail)
    return (
        <div>
            <EditAbout refetch={refetch} key={_id} userDetail={userDetail}></EditAbout>

            <form  className='grid grid-cols-1 gap-4 mt-6'>
            
            <p>Name</p><input name='name' type="text" disabled placeholder="Your Name" value={userName} className="input input-bordered w-full " />
            <p>Email</p><input name='email' type="email" disabled placeholder="Email Address" value={userEmail} className="input input-bordered w-full " />
            <p>Address</p><input name='phone' type="text" disabled placeholder="Address" value={address} className="input input-bordered w-full " />
            <p>University</p><input name='phone' type="text"disabled placeholder="University" value={university} className="input input-bordered w-full " />
                        <br />
                        {/* <input className='w-full  btn btn-accent' type="submit" value="submit" /> */}
                        <label htmlFor="my-modal-3" className="btn">Edit Profile</label>
                    </form>
        </div>
    );
};

export default About;