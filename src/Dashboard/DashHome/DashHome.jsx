import  { useContext } from 'react';

import { AuthContext } from '../../FirebaseConfig/AuthProvider';


const DashHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {user && <img src={user.photoURL} alt="User Profile" className="max-w-sm rounded-lg shadow-2xl" />}
                <div>
                    <h1 className="text-5xl font-bold text-red-500">HIII!!! {user.displayName}</h1>
                    <p className="py-6">Let us help you to remember your important task and keep track of your works</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DashHome;
