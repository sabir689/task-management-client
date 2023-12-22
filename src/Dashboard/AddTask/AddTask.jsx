import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../FirebaseConfig/AuthProvider';


const AddTask = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // Assuming user.email contains the authenticated user's email
        data.userEmail = user.email;

        console.log('Form Data:', data);
        fetch('https://task-manager-server-beige-iota.vercel.app/taskAdded', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((responseData) => {
                console.log(responseData);
                if (responseData.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            });
    };

    return (
        <div className="bg-[#b83e3e] border-2 h-full p-20 mt-12">
            <div className="flex justify-center">
                <h2 className="text-4xl btn font-extrabold text-center">Add a Task</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="input input-bordered w-full border-2 hover:bg-purple-50"
                                {...register('title', { required: true })}
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <textarea
                                name="description"
                                placeholder="Description"
                                className="input input-bordered w-full h-24 hover:bg-purple-50"
                                {...register('description', { required: true })}
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <label className="select">
                            <select
                                name="priority"
                                className="select select-bordered w-full border-4 hover:bg-purple-50"
                                {...register('priority', { required: true })}
                            >
                                <option value="" disabled selected>
                                    Select Priority
                                </option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="date"
                                name="deadline"
                                className="input input-bordered w-full border-2 hover:bg-purple-50"
                                {...register('deadline', { required: true })}
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="userEmail"
                                defaultValue={user ?.email}
                                className="input input-bordered w-full border-2 hover:bg-purple-50"
                                disabled
                            />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Task" className="btn btn-block hover:bg-purple-50" />
            </form>
        </div>
    );
};

export default AddTask;
