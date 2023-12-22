


const StudentSection = () => {
    return (
        <div className="mb-20">
           <div className="flex justify-center">
           <h1 className="text-center text-4xl mt-20 btn btn-primary"> Our CLients</h1>
           </div>
        <section className=" p-8 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

            <div className="border-2 py-28 p-4 rounded-2xl">
                <img className="h-48 ml-20" src="https://i.ibb.co/RB44093/student.png" alt="" />
                <h2 className="text-center text-2xl text-red-300">Hi my name is  Rita</h2>
                <p className="text-center mt-2">Currentl i am using this website to keep track of my daily routine</p>
            </div>
            <div className="border-2 py-28 p-4 rounded-2xl">
                <img className="h-48 ml-20" src="https://i.ibb.co/RB44093/student.png" alt="" />
                <h2 className="text-center text-2xl text-red-300">Hi my name is  Rita</h2>
                <p className="text-center mt-2">Currentl i am using this website to keep track of my daily routine</p>
            </div>
            <div className="border-2 py-28 p-4 rounded-2xl">
                <img className="h-48 ml-20" src="https://i.ibb.co/RB44093/student.png" alt="" />
                <h2 className="text-center text-2xl text-red-300">Hi my name is  Rita</h2>
                <p className="text-center mt-2">Currentl i am using this website to keep track of my daily routine</p>
            </div>
        </section>
        </div>
    );
};

export default StudentSection;
