import React from 'react'
import  { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiGet, doApiMethod } from '../../services/apiServices';

const AddJewelryFrom = () => {

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
      const url = (`${API_URL}/jewelry/${id}`);
      const data = await doApiMethod(url, "POST", _bodyData);
      if(data._id){
        alert("device added")
        nav("/admin/addJewelryFrom")
      }
    }
    catch(err){
      console.log(err);
    }
  }

  
  return (
    <div className='container'>  
        <h1>add  </h1>
    {select_ar.length > 0 ?
    <form onSubmit={handleSubmit(onSubForm)} className='col-md-6' id="id_form" >
    <label>שם</label>
    <input  {...register("name",{required:true, minLength: 2})} className="form-control" type="text" />
    {errors.name && <div className="text-danger">* הכנס שם</div>}
    <label>category</label>
    <select {...register("category",{required:true, minLength: 1})} className="form-select" type="select" >
    {select_ar.map(item=>{
      return(
        <option key={item._id} value={item.categories_id} >{item.name}</option>
      )
    })}
    </select>
    <label>info</label>
    <input  {...register("info",{required:true, min:1, max:100})} className="form-control" type="text" />
    {errors.info && <div className="text-danger">* הכנס תיאור מוצר</div>}
    <label>titel</label>
    <input  {...register("title",{required:true, min:1, max:100})} className="form-control" type="text" />
    {errors.titel && <div className="text-danger">* הכנס תיאור מוצר</div>}
    <label>price</label>
    <input  {...register("price",{required:true, min:1, max:999})} className="form-control" type="text" />
    {errors.price && <div className="text-danger">* הכנס מחיר(1 to 999)</div>}
    <label>img_url</label>
    <input  {...register("img_url",{required:true, min:1, max:9999})} className="form-control" type="text" />
    {errors.img_url && <div className="text-danger">* הכנס תמונה</div>}
    <button className='btn btn-success mt-3'>הוסף</button>
    </form>
    :<h2>looding...</h2>
  }</div>
  )
}

export default AddJewelryFrom