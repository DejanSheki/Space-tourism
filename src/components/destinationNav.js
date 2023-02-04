// import { useState, useEffect } from 'react';
import data from '../assets/data.json';
console.log(data.destinations);
const DestinationNav = () => {
    return (
        <nav className="relative left-57 top-14">
            <ul className="flex text-lightBlue uppercase">
                {data.destinations.map(dest => {
                    return (
                        <li key={dest.name} className="pr-8">{dest.name}</li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default DestinationNav;