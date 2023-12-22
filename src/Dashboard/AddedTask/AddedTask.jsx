import { useLoaderData } from "react-router-dom";
import AddedCard from "./AddedCard/AddedCard";
import { useState } from "react";


const AddedTask = () => {

    const loadedTasks = useLoaderData();
    const [tasks, setTask] = useState(loadedTasks)
    return (
        <div className="gap-10 w-full grid grid-cols-3 p-4 mt-12 h-full bg-red-400  ">
            <div className="border-2 rounded-box py-40 p-4  shadow-2xl hover:bg-blue-200 " >
                <h3 className="text-3xl btn  mb-5"> ToDo:{tasks.length}</h3>
                {
                    tasks.map(task => <AddedCard
                        key={task._id}
                        task={task}
                        tasks={tasks}
                        setTask={setTask}

                    >

                    </AddedCard>)
                }
            </div>

            <div  className="border-2 rounded-box py-40 p-4 hover:bg-blue-200  shadow-2xl ">
                <h3 className="text-3xl btn  mb-5"> On GOIng</h3>
            </div>
            <div className="border-2  hover:bg-blue-200  rounded-box py-40 p-4 shadow-2xl">
                <h3 className="text-3xl btn  mb-5">Completed</h3>
            </div>
        </div>

    );
};

export default AddedTask;