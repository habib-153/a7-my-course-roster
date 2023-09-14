/* eslint-disable no-undef */

import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header'
import Carts from './Components/Carts/Carts'
import { useState } from 'react'

function App() {
  const [courses, setAddCourse] = useState([])
  const [addCredit, setAddCredit] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = course => {
    const isExist = courses.find((item) => item.id == course.id)
    let temp = course?.credit;
    let price = course?.price;
    if(isExist){
      return Swal.fire({
        icon: 'success',
        title: 'You add this once before',
        text: "You can't add course more than once.",
        showConfirmButton: false,
        timer: 2000
      })
    }
    else{
      // setAddCourse([...courses, course]);
      courses.forEach((item)=>{
        temp += item.credit;
        price += item.price;
      });
      const sum = 20 - temp;
      if(sum < 0){
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
      else{
        setAddCourse([...courses, course]);
        setAddCredit(temp);
        setRemainingCredit(sum);
        setTotalPrice(price);
      }
    }
    
 }
  

  return (
    <div className='max-w-6xl p-10 md:p-0 mx-auto mt-4'>
      <Header></Header>
      <div className='md:flex mt-4 gap-3'>
        <Courses
        handleAddToCart={handleAddToCart}
        ></Courses>

        <Carts
        courses={courses}
        addCredit={addCredit}
        remainingCredit={remainingCredit}
        totalPrice={totalPrice}
        ></Carts>
      </div>
    </div>
  )
}

export default App
