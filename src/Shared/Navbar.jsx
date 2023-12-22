import { Link } from "react-router-dom";
import { AuthContext } from "../FirebaseConfig/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navOptions = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Profile">PRofile</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            {user?.email ? <>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
            

           
        </> :
            <li> </li>
        }
            
        </>
    )
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Task Management</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        
                        <>
                            <img src={user.photoURL} alt="User Profile" className="rounded-full w-8 h-8 mr-2" />
                            <a className="btn" onClick={logOut}>Logout</a>
                        </>
                    ) : (
                       
                        <Link to="/login" className="btn">Login</Link>
                    )}
                    
                </div>
            </div>
        </>
    );
};

export default Navbar;