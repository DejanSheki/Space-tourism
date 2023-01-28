import { Link } from "react-router-dom";

import Logo from '../assets/images/logo.svg';

const Nav = () => {
    return (
        <nav className="flex justify-between items-center absolute top-8 right-0 w-full pl-8 font-barlow">
            <Link to='/' className="p-4">
                <img src={Logo} alt="logo" />
            </Link>
            <div className="bg-gray h-px w-473 lg:w-0 text-base absolute top-12 left-44 z-10"></div>
            <ul className=" backdrop-blur-lg bg-gray/20 w-830 p-9 pl-12 flex justify-center text-white text-base uppercase">
                <Link to='/'><span className="font-bold pl-8 pr-3">00</span>Home</Link>
                <Link to='/destination'><span className="font-bold pl-8 pr-3">01</span>Destination</Link>
                <Link to='/crew'><span className="font-bold pl-8 pr-3">02</span>Crew</Link>
                <Link to='/technology'><span className="font-bold pl-8 pr-3">03</span>Technology</Link>
            </ul>
        </nav>
    )
}

export default Nav;