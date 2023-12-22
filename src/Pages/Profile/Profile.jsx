
import { useContext } from 'react';
import { AuthContext } from '../../FirebaseConfig/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div >

            <div className='p-20'>
                <h3 className="text-8xl text-red-500 "> See your profile here
                    see the task u have done</h3>
                <h1 className="text-5xl font-bold text-red-500">HIII!!! {user.displayName}</h1>

            </div>
        </div>
    );
};

export default Profile;