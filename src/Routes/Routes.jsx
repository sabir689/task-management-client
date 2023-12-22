import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import DashBoard from "../Dashboard/Dashboard/Index";
import AddTask from "../Dashboard/AddTask/AddTask";
import AddedTask from "../Dashboard/AddedTask/AddedTask";
// import UpdateTask from "../Dashboard/AddedTask/UpdateTask/UpdateTask";
import PrivateRoute from "../FirebaseConfig/PrivateRoutes";
import DashHome from "../Dashboard/DashHome/DashHome";
import Profile from "../Pages/Profile/Profile";
import Blogs from "../Pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:
            [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/profile',
                    element: <PrivateRoute><Profile></Profile></PrivateRoute>
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                },

            ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            
            {
                path: 'addTask',
                element:<AddTask></AddTask>,
            },
            {
                path: 'addedTask',
                element:<AddedTask></AddedTask>,
                loader: () => fetch('https://task-manager-server-beige-iota.vercel.app/taskAdded')
            },
            
            {
                path:'dashHome',
                element:<DashHome></DashHome>,
            }



        ]
    },
]);