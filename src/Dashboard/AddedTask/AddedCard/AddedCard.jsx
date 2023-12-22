/* eslint-disable react/prop-types */
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';



import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const AddedCard = ({ task, tasks, setTask, onDragStart }) => {
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://task-manager-server-beige-iota.vercel.app/taskAdded/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your Task has been deleted.',
                                icon: 'success',
                            });
                            const remaining = tasks.filter((tas) => tas._id !== _id);
                            setTask(remaining);
                        }
                    });
            }
        });
    };

    useEffect(() => {

        const currentDate = new Date();
        const deadlineDate = new Date(task.deadline);

        if (deadlineDate < currentDate) {
            Swal.fire({
                icon: 'error',
                title: 'Task Overdue',
                text: `The task "${task.title}" is overdue!`,
            });
        }
    }, [task]);

    const { _id, title, description, priority, deadline } = task;

    return (
        <div
            className="border-2 mb-5 rounded-2xl p-4 hover:bg-pink-100"
            draggable
            onDragStart={onDragStart}
        >
            <div className="py-10 p-8 rounded-2xl">
                <h2 className="text-4xl">{title}</h2>
                <h4 className="text-xl">{description}</h4>
                <h4 className="text-xl">{deadline}</h4>
                <h1 className="text-2xl font-bold ">{priority}</h1>
            </div>
            <div className="flex justify-between">
                <button onClick={() => handleDelete(_id)} className="btn">
                    DELETE
                </button>
                <button className="btn">Update</button>
            </div>
        </div>
    );
};

export default AddedCard;
