import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div id="slide1" className="carousel-item relative w-full">
        <img src={"https://i.ibb.co/PwhFMQc/wp3503158.jpg"} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-full'>
                <h2 className='text-6xl font-bold'>Keep the tracks <br /> of Your Tasks
                    </h2>
              
                <div className="flex">
                   <Link to={"login"}> <button className="btn btn-primary mr-5">Let’s Explore</button></Link>
                    {/* <button className="btn btn-outline btn-secondary">Latest Project</button> */}
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default Banner;