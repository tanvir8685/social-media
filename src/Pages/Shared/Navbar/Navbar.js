import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>

        <li className='font-semibold'><Link to='/'>Home</Link></li>
        
        
        <li className='font-semibold'><Link to='/media'>Media</Link></li>
        <li className='font-semibold'><Link to='/message'>Message</Link></li>
        <li className='font-semibold'><Link to='/about'>About</Link></li>
        <li className='font-semibold' ><Link to='/login'>LogIn</Link></li>
    </>
    return (

        <div>
            <div>
            <div className="navbar h-20 mb-12 bg-base-100">
                <div className=" nvbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className=" mask  w-32 h-12 flex  ml-10 mr-10">
                        {/* <img src='https://media.istockphoto.com/id/912599848/vector/yellow-vintage-car-high-detailed-image-of-retro-car-realistic-vehicle.jpg?s=612x612&w=0&k=20&c=ify71XNXcD-fvkPQtiKxsiD6dXkdrxlwVILal_vtllc=' alt="" /> */}
                        <button className="btn btn-ghost normal-case text-xl ">OnlineHUB</button>

                    </Link>
                    {/* <Link to='/' className="btn btn-ghost normal-case text-xl">VehicleHUB</Link> */}
                </div>
                <div className="navbar-center  hidden lg:flex ">
                    <ul className="menu menu-horizontal p-5 mx-10 ">

                        {menuItems}
                    </ul>
                </div>
                {/* <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label> */}

            </div>
        </div>
        </div>
    );
};

export default Navbar;