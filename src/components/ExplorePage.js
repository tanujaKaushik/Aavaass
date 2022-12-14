import React, {useState, useEffect} from 'react';
import AdCard from './AdCard';
import FilterBox from './FilterBox';
import axios from 'axios';

export default function ExplorePage(){
    const[users, setUsers] = useState([]);

    useEffect(()=>{
        console.log(" Good going..u can complete it..")
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result=await axios.get("http://localhost:3002/users");
        setUsers(result.data.reverse());
    };
    
    return(
        <>
        <h3 className='text-center my-6 text-xl font-semibold'> 5463 Choices Available </h3>
        <div className='mx-4 my-10 flex bg-white'>
            <div className='ml-40 w-96 mr-40 py-4 border-2 bg-blue-200 rounded-lg sticky top-44 z-0 h-96'>
                <FilterBox/>
            </div>
            <div>
                {/* <AdCard image='avatar.png' name='Tanuja Kaushik' address='Shastri Nagar' city='Bahadurgarh' features='fully furnished, ac, near to market'/>
                <AdCard image='logo192.png' name='Akanksha' address='Shastri Nagar' city='Manesar' features='fully furnished, ac, near to market'/>
                <AdCard image='avatar.png' name='Nikita' address='Shastri Nagar' city='Jhajjar' features='fully furnished, ac, near to market'/>
                <AdCard image='logo192.png' name='Akhila' address='Shastri Nagar' city='Bahadurgarh' features='fully furnished, ac, near to market'/> */}
                {
                    users.map((user, index) => (
                        <AdCard image='Images/house.png' name={user.name} address={user.address} city={user.city} features={user.features} details={`/users/view/${user.id}`}/>
                    ))
                }
            </div>
        </div>
        </>
    )
}