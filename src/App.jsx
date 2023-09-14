
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header'
import Carts from './Components/Carts/Carts'
import { useState } from 'react'

function App() {
  const [courses, setAddCourse] = useState([])

  const handleAddToCart = course => {
    const isExist = courses.find((item) => item.id == course.id)
    if(isExist){
      return alert("Already Added");
    }
    setAddCourse([...courses, course]);
 }

  return (
    <div className='max-w-6xl mx-auto mt-4'>
      <Header></Header>
      <div className='md:flex mt-4 gap-3'>
        <Courses
        handleAddToCart={handleAddToCart}
        ></Courses>

        <Carts
        courses={courses}
        ></Carts>
      </div>
    </div>
  )
}

export default App
