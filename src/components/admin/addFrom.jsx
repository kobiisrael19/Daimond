import  { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiGet, doApiMethod } from '../../services/apiServices';

const AddFrom = () => {
  const nav = useNavigate();
  const{register , handleSubmit , formState: { errors } } = useForm();
  const [select_ar,setSelectAr] = useState([])


useEffect(() => {
  doApi();
},[])

const doApi = async() => {
  try {
    const url = API_URL + "/categories";
    const data = await doApiGet(url);
    setSelectAr(data);
  } catch (error) {
    console.log(error);
  }
}

const onSubForm = (_bodyData) => {
  console.log(_bodyData);
  doApiPost(_bodyData)
}

const doApiPost = async(_bodyData) => {
  try{
    const url = API_URL + "/jewelry";
    const data = await doApiMethod(url, "POST", _bodyData);
    if(data._id){
      alert("device added")
      nav("/admin/jewelryAdmin")
    }
  }
  catch(err){
    console.log(err);
  }
}


  return (
<div className='container  mt-5 '>
 
  <h1 className='text-center'>הוספת מוצרים</h1>
  {select_ar.length > 0 ?
  <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 mx-auto p-3' id="id_form" >
<div className="mb-3">  <label> שם המוצר:</label>
  <input  {...register("name",{required:true, minLength: 2})} className="form-control" type="text" />
  {errors.name && <div className="colertecxt">* הכנס שם</div>}</div>
<div  className="mb-3">  <label>קטגוריה:</label>
  <select {...register("category",{required:true, minLength: 1})} className="form-select" type="select" >
  <option value="">בחירת קטגוריה</option>
  {select_ar.map(item=>{
    return(
      <option key={item._id} value={item.categories_id} >{item.
        category}</option>
    )
  })}
  </select>
  {errors.category && <div className="colertecxt">* בחר קטגוריה</div>}</div>
<div className="mb-3">  <label>מידע אודות המוצר:</label>
  <input  {...register("info",{required:true, min:1, max:100})} className="form-control" type="text" />
  {errors.info && <div className="colertecxt">* הכנס תיאור מוצר</div>}</div>
<div className="mb-3">  <label>מחיר המוצר:</label>
  <input  {...register("price",{required:true, min:1, max:999})} className="form-control" type="text" />
  {errors.price && <div className="colertecxt">* הכנס מחיר(1 to 999)</div>}</div>
<div className="mb-3">  <label>תמונת המוצר:</label>
  <input  {...register("img_url",{required:true, min:1, max:9999})} className="form-control" type="text" />
  {errors.img_url && <div className="colertecxt">* הכנס תמונה</div>}</div>
<div className="text-center">  <button className='btn btn-dark mt-2 col-6'>הוסף</button></div>
  </form>
  :<h2>looding...</h2>
}
</div>
  )
}

export default AddFrom