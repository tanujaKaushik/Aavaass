import React from 'react'

export default function FilterBox() {
    return (
        <>
            <p className='text-center font-serif text-lg font-bold mb-1'>Filters</p>
            {/* <div className='font-serif '>
                <p className='mx-5 mb-1 text-base'>Category</p>
                    <div className="dropdown">
                    <button className="btn btn-light bg-white dropdown-toggle mx-4 w-80 text-base" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Select Category </span>
                    </button>
                    <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">Flats</button></li>
                    <li><button className="dropdown-item" type="button">Paying Guest</button></li>
                    <li><button className="dropdown-item" type="button">Hostels</button></li>
                    </ul>
                </div>
            </div> */}
            <label className="block font-serif mb-2 mx-20 px-20" for="grid-state">Category</label>
            <div className="relative">
                <select className="block mx-16 bg-white border border-gray-200 text-gray-500 py-1 px-20 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>Flats</option>
                    <option>Paying Guests</option>
                    <option>Hostels</option>
                </select>
            </div>

            {/* <div className='font-serif '>
                <p className='mx-5 text-base'>Category</p>
                <input className="mx-16 -mt-2 w-60 placeholder:text-slate block bg-white border border-slate-300 rounded-md px-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="e.g. Flats.." type="text" name="search"/>
            </div> */}
            <div className='font-serif '>
                <p className='mx-5 text-base'>Location</p>
                <input className="mx-16 -mt-2 w-64 placeholder:text-slate block bg-white border border-slate-300 rounded-md px-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="e.g. Delhi.." type="text" name="search" />
            </div>
            <ul>
                <li className='flex text-sm mt-6'><input type="checkbox" className="ml-20 mr-10 -mt-0 checked  h-4 w-4" />Fully Furnished</li>
                <li className='flex text-sm'><input type="checkbox" className="ml-20 mr-10 -mt-0 checked  h-4 w-4" />With meal</li>
                <li className='flex text-sm'><input type="checkbox" className="ml-20 mr-10 -mt-0 checked  h-4 w-4" />Sharing</li>
            </ul>
            <input type="range" min="0" max="12100" value="0" step="1" className="slider mx-16 mt-3 " />
        </>
    )
}