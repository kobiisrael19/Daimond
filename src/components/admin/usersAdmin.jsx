import React from "react";
import { useEffect, useState } from "react";
import { API_URL,  doApiGet } from "../../services/apiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import AuthAdminComp from './authAdminComp';

const UsersAdmin = () => {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = API_URL + "/users/usersList";

    try {
      const data = await doApiGet(url);
      setAr(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      {/* <AuthAdminComp/> */}
      <h2 className="pb-4">משתמשי מערכת:</h2>
      <table className="table tab table-striped ">
        <thead>
          <tr>
            <th>#</th>
            <th>שם משתמש</th>
            <th>אימייל</th>
            <th>תפקיד</th>
            <th>מחיקה</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>"{item.role}"</td>
                <td>
                
                  <button className="btn border-0 ">
                   
                    <FontAwesomeIcon
                      className="coloriconAdmin1"
                      icon={faTrash}
                      size="xl"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersAdmin;
