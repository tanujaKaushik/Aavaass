import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

export default function Navbar(){
    return(
        <>
            <nav className="px-4 py-3 bg-black text-white sticky top-0 z-50">
                <ul className='flex'>
                    <li className='mx-4 mt-1 cursor-pointer'><Link to='/'>Home</Link></li>
                    <li className='mx-4 mt-1 cursor-pointer'><Link to='/signup'>Signup</Link></li>
                    <li className='mx-4 mt-1 cursor-pointer'><Link to='/dashboard'>Dashboard</Link></li>
                    <li className='mx-4 mt-1 cursor-pointer'><Link to='/explore'>Explore</Link></li>
                    <li className='ml-80 -mt-2'><input className="placeholder:italic ml-20 float-right placeholder:text-slate-400 block bg-white text-black w-full border border-slate-300 rounded-md py-1 pl-5 pr-3 ml-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder=" Search" type="text" name="search"/></li> 
                </ul>
            </nav>
        </>
    )
}