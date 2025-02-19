
import Login from "../Login/Login";
import { Link } from "react-router-dom";


function Navbar() {

  
  
  return (
    <div className="navbar bg-blue-900 shadow text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div  tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              
              fill="none"
             
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul 
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-800 rounded-box z-[2] mt-3 w-52 p-2 shadow"  >
            
            <Link to="/BuyCar"><li><a>BUYCAR</a></li></Link>
          <Link to='/SellCar'><li><a>SELLCAR</a></li></Link>
          <li>
            <Link to="/AboutPage">ABOUT</Link>
          </li>
          <li id="contact"><a  onClick={() => alert("Our Team will contact you soon")}>CONTACTUS</a></li>
                </ul>
        </div>
        <a className="btn btn-ghost text-3xl">CARSBUY</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <Link to="/"><a>HOME</a></Link></li>
          <Link to="/BuyCar"><li><a>BUYCAR</a></li></Link>
          <Link to='/SellCar'><li><a>SELLCAR</a></li></Link>
          <li>
            <Link to="/AboutPage">ABOUT</Link>
          </li>
          <li id="contact"><a  onClick={() => alert("Our Team will contact you soon")}>CONTACTUS</a></li>
        </ul>
      </div>

      {/* Ensuring the profile section stays to the right */}
      <div className="navbar-end flex items-center space-x-4 ml-auto">
       

        {/* Profile Dropdown Always on Right */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 md:w-auto flex rounded-full">
              <img
                alt="User Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-900 rounded-box z-[10] mt-3 w-auto  p-2  absolute right-0">
            <li>
              <a onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
              <Login />
            </li>
            <li><Link to="/signup"><a>Signup</a></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
