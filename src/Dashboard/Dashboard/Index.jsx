import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";


const DashBoard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex text-black font-medium ">
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen mt-20 bg-[#b83e3e]  border-2 p-4">
                    <ul className="menu p-4">
                        {
                            < >
                                <li className="hover:bg-blue-200 rounded-2xl">
                                    <NavLink to="/dashboard/dashHome">
                                        
                                        Home-Dashboard</NavLink>
                                </li>
                                <li className="hover:bg-blue-200 rounded-2xl">
                                    <NavLink to="/dashboard/addTask">
                                        
                                        Add Task</NavLink>
                                </li>
                                <li className="hover:bg-blue-200 rounded-2xl">
                                    <NavLink to="/dashboard/addedTask">
                                        
                                        To-Do-List</NavLink>
                                </li>
                               

                            </>

                        }

                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;