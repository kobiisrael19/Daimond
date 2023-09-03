import { useForm } from "react-hook-form";
import { API_URL, doApiMethod, TOKEN_KEY } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../../context/context";
import 'react-toastify/dist/ReactToastify.css';
import "./modleconnection.css";



 const Connection = (props) => { 

  
  const[info, setInfo] = useState([]);
 const nev = useNavigate();
 const { setToken,setIsLoggedIn} = useContext(Appcontext);

    const {
        register,
        handleSubmit: handleSubmitLogin,
        formState: { errors },
        reset,
      } = useForm();

      const onSub = async (bodydata) => {
        console.log(bodydata);
     
        try {
          const data = await doApiMethod(API_URL + "/users/login", "POST", bodydata);
          localStorage.setItem(TOKEN_KEY, data.token);
           setInfo(data);
           console.log(info);

          
          if (data.role === "admin") {
            nev("/admin");
            // window.location.reload();
            console.log(infoAdmin);
          } else if (data.role === "user") {
            setIsLoggedIn(true);
            toast.success(`${data.userName}
             ברוך שובך `, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            props.onHide();
            nev("/");
          }
          reset();
        } catch (error) {
          if (error.response) {
            const errorMessage = error.response.data.msg || "שגיאה בהתחברות";
            toast.error(errorMessage, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error();
          }
        }
      };

      useEffect(() =>{
if(info.token){
  setToken(info.token)
}
      },[info])
      
     
    
  return (
    <div >
       <form className="col-12" onSubmit={handleSubmitLogin(onSub)}>
    <h2>התחברות</h2>
    <div>
      <label className="fw-bold">כתובת איימיל:</label>
      <input
        type="email"
        name="emile"
        className="form-control  my-2"
        {...register("email", {
          required: "שדה זה הוא חובה.",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "אימייל אינו תקין",
          },
        })}
      />
      {errors.email && (
        <p className="colertecxt">{errors.email.message}</p>
      )}
    </div>
    <div>
      <label className="fw-bold">סיסמא:</label>
      <input
        type="password"
        name="password"
        className="form-control my-2"
        {...register("password", {
          required: true,
          validate: {
            checkLength: (value) => value.length >= 4,
          },
        })}
      />
      {errors.password?.type === "required" && (
        <p className="colertecxt">שדה זה הוא חובה.</p>
      )}
      {errors.password?.type === "checkLength" && (
        <p className="colertecxt">סיסמה צריכה להכיל לפחות 4 תווים.</p>
      )}
    </div>
    <div>
      <label className="checkbox mt-3">
        <input
          className="ms-2 "
          type="checkbox"
          value="remember-me"
          name="rememberMe"
        />
        זכור אותי
      </label>
      <button  className="btn btnOn" type="submit">
        התחברות
      </button>
    </div>
  </form>
      <ToastContainer />
  </div>
  )
}

export default Connection