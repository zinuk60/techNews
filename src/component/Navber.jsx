import { Link, NavLink } from "react-router";
import user from '../assets/user.png'

const Navber = () => {
    return (
        <div className="flex justify-between items-center ">
        <div></div>
         <div className="flex items-center gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
         </div>
         <div className="flex items-center gap-5">
            <img className="hidden md:flex" src={user} alt="user-Image" />
            <button className="btn bg-[#403F3F] px-5 text-white"><Link to="/login">Login</Link></button>
         </div>
        </div>
    );
};

export default Navber;