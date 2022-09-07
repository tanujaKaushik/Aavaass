import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';

export default function DashboardPage(){
    const[users, setUsers] = useState([]);

    useEffect(()=>{
        console.log(" Good going..u can complete it..")
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result=await axios.get("http://localhost:3002/users");
        setUsers(result.data);
    };
    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    }
    
    return(
        <>
            <div className="container -mx-4 -my-7">
            <div className="navigation bg-blue-200">
                <ul>
                    <li><span className="icon"><img id="logo" src="Images/loogo.png" alt=""/></span></li>
                    <Link to="/"><li><span className="title text-black font-medium ">Home</span></li></Link>
                    <Link to="/dashboard"><li><span className="title active text-black font-medium ">Dashboard</span></li></Link>
                    <Link to="/explore"><li><span className="title text-black font-medium ">Search</span></li></Link>
                    <Link to="/"><li><span className="title text-black font-medium ">Friends</span></li></Link>
                    <Link to="/"><li><span className="title text-black font-medium ">About Us</span></li></Link>
                    <Link to="/"><li><span className="title text-black font-medium ">Sign Out</span></li></Link>
                </ul>
            </div>
            <div className="main">

            {/* <div className="top-content">
                <h5>Helllo!!!!</h5>
                <h1>USER</h1>
                <div className="p_info">
                    <h4>Peronal Information</h4>
                    <ul>
                        <li>Contact : </li>
                        <li>Address : </li>
                        <li>E-mail : </li>
                        <li>Registered as : </li>
                    </ul>
                </div>
            </div>
            
            <div className="card-box">
                <div className="card">
                    <div>
                        <div className="number">2</div>
                        <div className="cardName">Posts</div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="number">23</div>
                        <div className="cardName">Interested In</div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="number">6</div>
                        <div className="cardName">Friends</div>
                    </div>
                </div>
            </div> */}

            <nav className="px-4 py-3 bg text-black sticky my-7 bg-slate-100">
                <ul className='flex place-content-end'>
                    <li className='mx-4 mt-1 cursor-pointer'><Link to='/users/create'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create new Post</button></Link></li>
                    <li className='mx-4 mt-1 cursor-pointer'><Link to='/'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Notification</button></Link></li>
                    {/* <li className='mx-4 mt-1 cursor-pointer'><Link to='/dashboard'>Dashboard</Link></li>
                    <li className='mx-4 mt-1 cursor-pointer'><Link to='/explore'>Explore</Link></li> */}
                </ul>
            </nav>

            <div className="content">
            <p className='text-3xl font-bold mb-10'>Posts</p>
            
            <table className="table-fixed w-full border-4 border-slate-200 rounded-xl">
                <thead>
                    <tr className='bg-slate-200'>
                    <th className='text-2xl py-4 px-6 italic'>Post Id</th>
                    <th className='text-2xl py-4 px-6 italic'>Address</th>
                    <th className='text-2xl py-4 px-6 italic'>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>(
                        <tr>
                        <td className='text-xl py-4 pl-32 italic '>{index +1} . {user.name}</td>
                        <td className='text-xl py-4 px-6 italic '>{user.address}, {user.state}</td>
                        <td className='text-base py-4 px-6 italic'>
                            <ul className='flex place-content-end'>
                                <li className='mx-4 mt-1 cursor-pointer'><Link to={`/users/view/${user.id}`}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button></Link></li>
                                <li className='mx-4 mt-1 cursor-pointer'><Link to={`/users/edit/${user.id}`}><button className='bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded'>Edit</button></Link></li>
                                <li className='mx-4 mt-1 cursor-pointer'><Link to='/dashboard' onClick={() => deleteUser(user.id)}><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button></Link></li>
                            </ul>
                        </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>

            {/* <div className="content">
                <h2>Shown interest</h2>
                <div className="p_info">
                    <h4>Peronal Information</h4>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3 </li>
                        <li>4 </li>
                    </ul>
                </div>
            </div> */}
        </div>
        </div>
        </>
    )
}