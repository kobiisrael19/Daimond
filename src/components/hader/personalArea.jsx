import React from 'react'
import { useContext } from "react";
import { Appcontext } from "../../context/context";
const PersonalArea = () => {

    const {data} = useContext(Appcontext);
    console.log(data)
    if (!data) {
        return (
          <div>
            <p>Loading...</p> {/* תוכל להציב כאן הודעה אחרת */}
          </div>
        );
    }
  return (
    <div dir='rtl' className='d-flex justify-content-center p-5'>
           
 <div>
 <p className='text-danger'>שם משתמש:   <span className='fw-bold'>{data.userName}</span></p>
 <p className='text-danger'>אימייל:  <span className='fw-bold'>{data.email}</span></p>
      
 </div>
        </div>
  )
}

export default PersonalArea


PersonalArea.jsx


