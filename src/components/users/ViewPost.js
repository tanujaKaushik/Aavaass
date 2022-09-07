import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';

export default function ViewPost(){
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

    const {id} = useParams();
    
    useEffect(() => {
        loadUser();
    },[]);

    const {name,phone, city, state, address, photo, features, pin, price } =user;

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
    }

    return(
        <>
            <p className="font-bold text-4xl pt-20">View Post</p>
            <div className='container'>
                <table className="table-auto ml-48 w-2/4">
                    <thead>
                        <tr>
                        <th className='text-2xl'>Attribute</th>
                        <th className='text-2xl gap-x-20'>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='text-xl py-4 text-center'>Id</td>
                        <td>{id}</td>
                        </tr>
                        <tr>
                        <td className='text-xl py-4 text-center'>Name</td>
                        <td>{name}</td>
                        </tr>
                        <tr>
                        <td className='text-xl py-4 text-center'>Address</td>
                        <td>{address}</td>
                        </tr>
                        <tr>
                        <td className='text-xl py-4 text-center'>City</td>
                        <td>{city}</td>
                        </tr>
                        <tr>
                        <td className='text-xl py-4 text-center'>State</td>
                        <td>{state}</td>
                        </tr>
                        <tr>
                        <td className='text-xl py-4 text-center'>Pincode</td>
                        <td>{pin}</td>
                        </tr>
                        <tr>
                        <td className='text-xl py-4 text-center'>Price</td>
                        <td>{price}</td>
                        </tr>
                        <tr>
                        <td className='text-xl py-4 text-center'>Features</td>
                        <td>{features}</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </>
    )
}