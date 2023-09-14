/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToCart}) => {
    const [courses, setCourses] = useState([]);
        
    useEffect(()=> {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    
    return (
        
        <div className="md:w-[77%]">
            <div className="grid grid-cols-3 gap-3">
                {
                courses.map(course => <Course
                key={course.id}
                course={course}
                handleAddToCart={handleAddToCart}
                ></Course>)
            }
            </div>
            
        </div>
    );
};

export default Courses;