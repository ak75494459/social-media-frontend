import React from 'react'
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { FaComments } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const auth = localStorage.getItem("user")
    return (
        <div>
            <div className=' flex-row m-auto  justify-center item-center hidden md:flex p-4' id='mainNavbar'>
                <div className="flex flex-row justify-center items-center ml-5">
                    <div className=''>
                        <img className='h-[3rem]' src="https://www.urlaubstracker.de/wp-content/uploads/2023/08/The-Social-Hub-Voucher-Logo.png" alt="not showing" />
                    </div>
                    <div className='search m-auto flex flex-row  p-2 '>
                        <img className='relative left-[32px]' alt='not showing' src="data:image/svg+xml,<svg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'><g%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'><path%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/></g><defs><clipPath%20id='clip0_1_1172'><rect%20width='22'%20height='22'%20fill='white'/></clipPath></defs></svg>" />
                        <input type="search" id="default-search" className="bg-slate-200 bg-slate-200 px-10 rounded-full border-none  w-[15rem] h-[42px]" placeholder="Search" />
                    </div>
                </div>

                <div className='m-auto'>
                    <ul className='flex gap-[3rem] '>
                        <IconContext.Provider value={{ size: "24px" }}>

                            <li className='hover:bg-gray-100 py-2 px-4 rounded cursor-pointer active'><NavLink to="/"><AiFillHome /></NavLink></li>
                            <li className='hover:bg-gray-100 py-2 px-4 rounded cursor-pointer'><NavLink to="/"><FaUserFriends /></NavLink></li>
                            <li className='hover:bg-gray-100 py-2 px-4 rounded cursor-pointer'><NavLink to="/"><FaUsers /></NavLink></li>
                            <li className='hover:bg-gray-100 py-2 px-4 rounded cursor-pointer'><NavLink to="/"><FaComments /></NavLink></li>
                        </IconContext.Provider>
                    </ul>

                </div>
                <div className='login flex gap-2 justify-center items-center m-auto ml-10'>

                    <div className='flex flex-row gap-4 justify-center items-center'><img className='rounded-[2rem] w-[5rem]' src="https://th.bing.com/th/id/OIP.D-uzJlVGctz9OBS33TCs7wAAAA?rs=1&pid=ImgDetMain" alt="not showing" /><span className='font-bold hover:underline cursor-pointer'>{JSON.parse(auth).name}</span></div>

                </div>
            </div>
        </div>
    )
}
