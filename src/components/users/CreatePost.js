import axios from "axios";
import React, {useState} from "react";
// import {useNavigate} from 'react-router-dom';

export default function CreatePost(){
    const [user, setUser]= useState({
        name:" ",
        phone:" ",
        city:" ",
        state:" ",
        address:" ",
        photo:" ",
        features:" ",
        pin:"",
        price:" "
    });
     
    // let history = useNavigate();

    const {name,phone, city, state, address, photo, features, pin, price } =user;
    const onInputChange =e => {
        setUser({...user,[e.target.name]: e.target.value});
        // history("/dashboard");
    };

    const submitted= async e => {
        e.preventDefault();
        await axios.post("http://localhost:3002/users",user);
    };
    return(
        <>
        <div className="-mt-16 pb-20 " style={{ background: "linear-gradient(to right, rgb(96 165 250), rgb(191 219 254),rgb(147 197 253))"}}>
        <p className="font-bold text-4xl pt-20">Create Post</p>
        <div className="container">
        <form className="bg-blue-100 px-20 py-10 border border-blue-200 rounded-xl ml-44 my-16">

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" htmlFor="grid-first-name">
                    Name
                </label>
                <input className="appearance-none w-full bg-white text-gray-700 border border-red-500 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  name="name" value={name} type="text" placeholder="Rohan Das" onChange={e => onInputChange(e)}/>
                </div>
                
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" htmlFor="grid-last-name">
                    Phone number
                </label>
                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="+91 9999999999" name="phone" value={phone} onChange={e => onInputChange(e)}/>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" htmlFor="grid-password">
                    Address
                </label>
                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="address" id="grid-address" value={address} type="text" placeholder="address No.7, Malkaganj, near Hansraj College, Delhi"  onChange={e => onInputChange(e)}/>
                <p className="text-gray-600 text-xs italic">The more accurate the better</p>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" htmlFor="grid-city">
                    City
                </label>
                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="city" value={city} id="grid-city" type="text" placeholder="Albuquerque"  onChange={e => onInputChange(e)}/>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" htmlFor="grid-state">
                    State
                </label>
                <div className="relative">
                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="state" value={state} id="grid-state" onChange={e => onInputChange(e)}>
                    <option>select</option>
                    <option>Haryana</option>
                    <option>Delhi</option>
                    <option>Punjab</option>
                    <option>Maharashtra</option>
                    <option>Tamil Nadu</option>
                    <option>Uttarakhand</option>
                    <option>Uttar Pradesh</option>
                    <option>Bihar</option>
                    </select>
                    <div className="pointer-events-none apriceolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" htmlFor="grid-zip">
                    Pin Code
                </label>
                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-pinCode" name="pin" value={pin} type="text" placeholder="90210"  onChange={e => onInputChange(e)}/>
                </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" htmlFor="grid-password">
                        Photo 
                    </label>
                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-photo" name="photo" value={photo} type="text" placeholder="https//:"  onChange={e => onInputChange(e)}/>
                    <p className="text-gray-600 text-xs italic">You can provide drive link too</p>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" htmlFor="grid-password">
                        Features 
                    </label>
                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-features" name="features" type="text" value={features} placeholder="Fully Furnished, AC Rooms..."  onChange={e => onInputChange(e)}/>
                    {/* <p className="text-gray-600 text-xs italic">You can provide drive link too</p> */}
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" htmlFor="grid-password">
                        Price 
                    </label>
                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-price" name="price" value={price} type="number" placeholder="30000" onChange={e => onInputChange(e)}/>
                    {/* <p className="text-gray-600 text-xs italic">You can provide drive link too</p> */}
                    </div>
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={e => submitted(e)}>Create</button>
                                
        </form>
        </div>
        </div>
        </>
    )
}