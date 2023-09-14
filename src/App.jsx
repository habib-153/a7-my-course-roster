
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header'
import Carts from './Components/Carts/Carts'
import { useState } from 'react'

function App() {
  const [courses, setAddCourse] = useState([])
  const [addCredit, setAddCredit] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(20)

  const handleAddToCart = course => {
    const isExist = courses.find((item) => item.id == course.id)
    let temp = course?.credit;
    if(isExist){
      return alert("Already Added");
    }
    else{
      // setAddCourse([...courses, course]);
      courses.forEach((item)=>{
        temp += item.credit;
      });
      const sum = 20 - temp;
      if(sum < 0){
        return alert("Limit shes");
      }
      else{
        setAddCourse([...courses, course]);
        setAddCredit(temp);
        setRemainingCredit(sum);
      }
    }
    
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
        addCredit={addCredit}
        remainingCredit={remainingCredit}
        ></Carts>
      </div>
    </div>
  )
}

export default App
