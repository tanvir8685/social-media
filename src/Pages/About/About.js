import React from 'react';

const About = () => {
    return (
        <div>
            <form  className='grid grid-cols-1 gap-4 mt-6'>
                        <input type="text" className="input input-bordered w-full " />            
                        <input name='name' type="text" placeholder="Your Name"  className="input input-bordered w-full " />
                        <input name='email' type="email"  placeholder="Email Address" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full " />
                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value="submit" />
                    </form>
        </div>
    );
};

export default About;