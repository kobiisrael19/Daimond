import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL, doApiGet, doApiMethod } from "../../services/apiServices";

const AdditFrom = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [select_ar, setSelectAr] = useState([]);
  const params = useParams();
  const [formDada, setFormData] = useState({});

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      const url = API_URL + "/categories";
      const data = await doApiGet(url);
      setSelectAr(data);
      const urlJewelry = API_URL + "/jewelry/single/" + params["id"];
      const dataJewelry = await doApiGet(urlJewelry);
      console.log(dataJewelry);
      setFormData(dataJewelry);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    doApiEdit(_bodyData);
  };

  const doApiEdit = async (_bodyData) => {
    try {
      const url = API_URL + "/jewelry/" + params["id"];
      const data = await doApiMethod(url, "PUT", _bodyData);
      if (data.modifiedCount) {
        alert("device updated");
        nav(-1);
        console.log("ok");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    //   <div className='container'>
    //       <h1>add  </h1>
    //   {select_ar.length > 0 && formDada.name ?
    //   <form onSubmit={handleSubmit(onSubForm)} className='col-md-6' id="id_form" >
    //   <label>שם</label>
    //   <input defaultValue={formDada.name}  {...register("name",{required:true, minLength: 2})} className="form-control" type="text" />
    //   {errors.name && <div className="text-danger">* הכנס שם</div>}
    //   <label>category</label>
    //   <select defaultValue={formDada.categories_id} {...register("category",{required:true, minLength: 1})} className="form-select" type="select" >
    //   {select_ar.map(item=>{
    //     return(
    //       <option key={item._id} value={item.categories_id} >{item.name}</option>
    //     )
    //   })}
    //   </select>
    //   <label>info</label>
    //   <input defaultValue={formDada.info} {...register("info",{required:true, min:1, max:100})} className="form-control" type="text" />
    //   {errors.info && <div className="text-danger">* הכנס תיאור מוצר</div>}
    //   <label>titel</label>
    //   <input defaultValue={formDada.title}{...register("title",{required:true, min:1, max:100})} className="form-control" type="text" />
    //   {errors.titel && <div className="text-danger">* הכנס תיאור מוצר</div>}
    //   <label>price</label>
    //   <input defaultValue={formDada.price} {...register("price",{required:true, min:1, max:999})} className="form-control" type="text" />
    //   {errors.price && <div className="text-danger">* הכנס מחיר(1 to 999)</div>}
    //   <label>img_url</label>
    //   <input defaultValue={formDada.img_url} {...register("img_url",{required:true, min:1, max:9999})} className="form-control" type="text" />
    //   {errors.img_url && <div className="text-danger">* הכנס תמונה</div>}
    //   <button className='btn btn-warning mt-3'>הוסף</button>
    //   </form>
    //   :<h2>looding...</h2>
    // }</div>
    <div className="container  mt-5 ">
      <h1 className="text-center">עריכת המוצר</h1>
      {select_ar.length > 0 && formDada.name ? (
        <form
          onSubmit={handleSubmit(onSubForm)}
          className="col-md-6 mx-auto p-3"
          id="id_form"
        >
          <div className="mb-3">
            <label> שם המוצר:</label>
            <input defaultValue={formDada.name}
              {...register("name", { required: true, minLength: 2 })}
              className="form-control"
              type="text"
            />
            {errors.name && <div className="colertecxt">* הכנס שם</div>}
          </div>
          <div className="mb-3">
         
            <label>קטגוריה:</label>
            <select defaultValue={formDada.category} {...register("category", { required: true, minLength: 1 })} className="form-select" type="select">
  {select_ar.map(item => {
    return (
      <option key={item._id} value={item.categories_id}>{item.category}</option>
    );
  })}
</select>

            {errors.category && <div className="colertecxt">* בחר קטגוריה</div>}
          </div>
          <div className="mb-3">
            <label>מידע אודות המוצר:</label>
            <input defaultValue={formDada.info}
              {...register("info", { required: true, min: 1, max: 100 })}
              className="form-control"
              type="text"
            />
            {errors.info && <div className="colertecxt">* הכנס תיאור מוצר</div>}
          </div>
          <div className="mb-3">
         
            <label>מחיר המוצר:</label>
            <input defaultValue={formDada.price}
              {...register("price", { required: true, min: 1, max: 999 })}
              className="form-control"
              type="text"
            />
            {errors.price && (
              <div className="colertecxt">* הכנס מחיר(1 to 999)</div>
            )}
          </div>
          <div className="mb-3">
       
            <label>תמונת המוצר:</label>
            <input defaultValue={formDada.img_url}
              {...register("img_url", { required: true, min: 1, max: 9999 })}
              className="form-control"
              type="text"
            />
            {errors.img_url && <div className="colertecxt">* הכנס תמונה</div>}
          </div>
          <div className="text-center">
         
            <button className="btn btn-dark mt-2 col-6">לעדכן</button>
          </div>
        </form>
      ) : (
        <h2>looding...</h2>
      )}
    </div>
  );
};

export default AdditFrom;
