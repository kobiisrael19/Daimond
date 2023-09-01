import { useForm } from "react-hook-form";
import { API_URL, doApiMethod } from "../../services/apiServices";
import { useState } from "react";
import "./modleconnection.css";

const Enrollment = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
    const {
        register: registerRegister,
        handleSubmit: handleSubmitRegister,
        formState: { errors: errorsRegister },
        reset: resetRegister,
      } = useForm();
    
      const onSubmitRegister = async (bodydata) => {
        try {
          const data = await doApiMethod(API_URL + "/users", "POST", bodydata);
          props.handleLoginSuccess(bodydata.userName); // קריאה לפונקציה שמעדכנת סטייט בקומפוננטה האב
          resetRegister();
        } catch (error) {
          if (error.response?.data?.code === 11000) {
            setErrorMessage("המייל כבר קיים במערכת");
          } else {
            setErrorMessage("שגיאה בהרשמה, אנא נסה שוב מאוחר יותר");
          }
        }
      };
  return (
    <div> <form
    onSubmit={handleSubmitRegister(onSubmitRegister)}
    className="col-12"
  >
    <h2>הרשמה</h2>
    {errorMessage && <p className="text-danger my-3">{errorMessage}</p>}
    <div>
      <label className="fw-bold">שם משתמש:</label>
      <input
        type="text"
        name="userName"
        className="form-control my-2"
        {...registerRegister("userName", {
          required: "שדה זה הוא חובה.",
        })}
      />
      {errorsRegister.userName && (
        <p className="colertecxt">{errorsRegister.userName.message}</p>
      )}
    </div>
    <div>
      <label className="fw-bold">כתובת איימיל:</label>
      <input
        type="email"
        name="emile"
        className="form-control  my-2"
        {...registerRegister("email", {
          required: "שדה זה הוא חובה.",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "אימייל אינו תקין",
          },
        })}
      />
      {errorsRegister.email && (
        <p className="colertecxt">{errorsRegister.email.message}</p>
      )}
    </div>
    <div>
      <label className="fw-bold">סיסמא:</label>
      <input
        type="password"
        name="password"
        className="form-control my-2"
        {...registerRegister("password", {
          required: true,
          validate: {
            checkLength: (value) => value.length >= 4,
          },
        })}
      />
      {errorsRegister.password?.type === "required" && (
        <p className="colertecxt">שדה זה הוא חובה.</p>
      )}
      {errorsRegister.password?.type === "checkLength" && (
        <p className="colertecxt">סיסמה צריכה להכיל לפחות 4 תווים.</p>
      )}
    </div>
    <div>
      <label className="checkbox mt-3">
        <input
          className="ms-2"
          type="checkbox"
          value="remember-me"
          name="rememberMe"
        />
        מאשר\ת קבלת עידכונים למייל
      </label>
      <button className="btn btnOn">הרשמה</button>
    </div>
  </form></div>
  )
}

export default Enrollment