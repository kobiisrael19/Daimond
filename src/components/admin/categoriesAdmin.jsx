import React from 'react'
// import AuthAdminComp from './authAdminComp';
import { useEffect, useState } from 'react'
import { API_URL, doApiGet } from '../../services/apiServices';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash ,faPenToSquare} from "@fortawesome/free-solid-svg-icons";

const CategoriesAdmin = () => {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    const url = API_URL + "/categories";

    try {
      const data = await doApiGet(url)
      console.log(data);
   
      setAr(data)
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
    
      <div className='container-md'>
      {/* <AuthAdminComp/> */}
      <h2 className='mt-4'>כל הקטגוריות שיש במערכת:</h2>
  <div className="row mt-5">
  <table className='table tab table-striped'>
        <thead>
          <tr>
            <th  >#</th>
            <th className='col'>שם הקטגוריה </th>
            <th className='col'>מספר מזהה קטגוריה</th>
            <th className='col-2 col-md-3'>מחיקה/עריכה</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td>
                <button className='btn border-0 '> <FontAwesomeIcon className='coloriconAdmin1' icon={faTrash} size="xl"  /></button>
                <button className='btn border-0 ps-3  coloriconAdmin2'><FontAwesomeIcon className='coloriconAdmin2' icon={faPenToSquare} size="xl" /></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
  </div>
    </div>
      </div>
  )
}

export default CategoriesAdmin