/* eslint-disable react/prop-types */
import {FaBookOpen, FaDollarSign } from 'react-icons/fa';



const Course = ({course, handleAddToCart}) => {
    const {id, cover, title, description, price, credit} = course;

    return (
        <div className="bg-[#efefef] p-2 rounded-xl mb-3">
            <div className="space-y-3">
            <img className="w-full rounded-xl" src={cover} alt={`cover picture of the title ${title}`} />
            <p className="font-semibold text-lg">{title}</p>
            <p className='text-sm text-[rgba(28,27,27,0.6)]'>{description}</p>
            <div className='flex justify-between'>
                <p className='flex items-center text-[rgba(28,27,27,0.6)]'><FaDollarSign className='text-2xl'></FaDollarSign><span className='ml-2'>Price: {price}</span></p>
                
                <p className='flex items-center text-[rgba(28,27,27,0.6)]'><FaBookOpen className='text-2xl'></FaBookOpen><span className='ml-2'>Credit: {credit}</span></p>
            </div>
            <button onClick={()=> handleAddToCart(course)} className='bg-[#2F80ED] rounded-xl text-white w-full p-2 font-semibold text-lg'>Select</button>
            </div>
        </div>
    );
};

export default Course;